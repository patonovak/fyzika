import { loadQuartzConfig, loadQuartzLayout } from "./quartz/plugins/loader/config-loader"
import { componentRegistry } from "./quartz/components/registry"

componentRegistry.setOptionOverrides("explorer", {
  sortFn: (a: any, b: any) => {
    if ((!a.isFolder && !b.isFolder) || (a.isFolder && b.isFolder)) {
      const aName = a.fileSegmentHint || a.slugSegment || a.displayName || ""
      const bName = b.fileSegmentHint || b.slugSegment || b.displayName || ""
      return aName.localeCompare(bName, undefined, {
        numeric: true,
        sensitivity: "base",
      })
    }

    if (!a.isFolder && b.isFolder) return 1
    return -1
  },
  mapFn: (node: any) => {
    if (!node.isFolder && typeof node.displayName === "string") {
      node.displayName = node.displayName.replace(/^\d+\s+/, "")
    }
    return node
  },
})

const config = await loadQuartzConfig()
export default config
export const layout = await loadQuartzLayout()
