import { h } from "preact"
import { htmlToJsx } from "@quartz-community/utils/jsx"

function IndexBody() {
  return ({ fileData, tree }) => {
    const frontmatter = fileData?.frontmatter ?? {}
    const classes = Array.isArray(frontmatter.cssclasses) ? frontmatter.cssclasses : []
    const className = ["popover-hint", ...classes].join(" ")

    return h(
      "article",
      { class: className },
      h("div", { class: "markdown-preview-view markdown-rendered" }, htmlToJsx(tree)),
    )
  }
}

export default function CleanIndexPage() {
  return {
    name: "CleanIndexPage",
    priority: 20,
    match({ slug }) {
      return slug.endsWith("/index")
    },
    layout: "content",
    body: IndexBody,
  }
}
