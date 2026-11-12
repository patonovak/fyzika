import { readdirSync } from "node:fs"
import { slugifyFilePath, type FilePath } from "../../util/path"
import type { Element, Root } from "hast"
import type { QuartzTransformerPlugin } from "../types"
import figureLayout from "./figure-layout.json"

const pageSlugs = new Map<string, string>()
for (const entry of readdirSync("content", { recursive: true })) {
  const name = String(entry)
  if (!name.endsWith(".md")) continue
  const slug = slugifyFilePath(name as FilePath)
  pageSlugs.set(slug.replace(/\/index$/, ""), slug)
}

const layouts: Record<string, { tag: string; classes: string[] }> = figureLayout

// Keep the Markdown native to Obsidian. Restore the legacy website layout
// for migrated illustrations without putting formatting markers in the notes.
export function restoreFigureLayout(tree: Root, file?: { data: { slug?: string } }) {
  function walk(parent: Root | Element) {
    for (const node of parent.children) {
      if (node.type !== "element") continue
      if (node.tagName === "a" && typeof node.properties.href === "string" && file?.data.slug) {
        const href = node.properties.href
        if (!/^(?:[a-z]+:|#|\/\/)/i.test(href)) {
          const [path, anchor] = href.split("#")
          const key = decodeURI(path).normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/^(?:\.\.?\/)+/, "").replace(/\/index(?:\.html)?$/, "").replace(/\/$/, "")
          const target = pageSlugs.get(key)
          if (target) {
            const depth = file.data.slug.split("/").length - 1
            node.properties.href = (depth ? "../".repeat(depth) : "./") + target + ".html" + (anchor ? "#" + anchor : "")
          }
        }
      }
      if (node.tagName === "p") {
        const index = node.children.findIndex((c) => c.type === "element" && c.tagName === "img")
        const image = node.children[index]
        if (image?.type === "element" && typeof image.properties.src === "string") {
          const src = image.properties.src
          const key = src.slice(src.indexOf("images/"))
          const layout = layouts[key]
          if (layout && file?.data.slug && !/^[a-z]+:/i.test(src)) {
            const depth = file.data.slug.split("/").length - 1
            image.properties.src = (depth ? "../".repeat(depth) : "./") + key
          }
          // Only style standalone image paragraphs, never inline illustrations.
          const before = node.children.slice(0, index)
          if (layout && before.every((c) => c.type === "text" && !c.value.trim())) {
            node.tagName = layout.tag
            node.properties.className = [...layout.classes]
            if (layout.tag === "figure") {
              const caption = node.children.splice(index + 1)
              while (
                caption[0] &&
                ((caption[0].type === "text" && !caption[0].value.trim()) ||
                  (caption[0].type === "element" && caption[0].tagName === "br"))
              )
                caption.shift()
              if (caption[0]?.type === "text") caption[0].value = caption[0].value.trimStart()
              node.children.push({
                type: "element",
                tagName: "figcaption",
                properties: {},
                children: caption,
              })
            }
          }
        }
      }
      walk(node)
    }
  }
  walk(tree)
}

export const ObsidianFigures: QuartzTransformerPlugin = () => ({
  name: "ObsidianFigures",
  htmlPlugins: () => [() => restoreFigureLayout],
})
