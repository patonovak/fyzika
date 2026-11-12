import type { Element, Root } from "hast"
import type { QuartzTransformerPlugin } from "../types"
import figureLayout from "./figure-layout.json"

const layouts: Record<string, { tag: string; classes: string[] }> = figureLayout

// Keep the Markdown native to Obsidian. Restore the legacy website layout
// for migrated illustrations without putting formatting markers in the notes.
export function restoreFigureLayout(tree: Root) {
  function walk(parent: Root | Element) {
    for (const node of parent.children) {
      if (node.type !== "element") continue
      if (node.tagName === "p") {
        const index = node.children.findIndex((c) => c.type === "element" && c.tagName === "img")
        const image = node.children[index]
        if (image?.type === "element" && typeof image.properties.src === "string") {
          const src = image.properties.src
          const key = src.slice(src.indexOf("images/"))
          const layout = layouts[key]
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
