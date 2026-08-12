// Re-export shared path utilities from @quartz-community/utils
import {
  slugifyFilePath as quartzSlugifyFilePath,
  slugTag as quartzSlugTag,
  transformInternalLink as quartzTransformInternalLink,
  transformLink as quartzTransformLink,
} from "@quartz-community/utils"

export {
  isFilePath,
  isFullSlug,
  isSimpleSlug,
  isRelativeURL,
  isAbsoluteURL,
  getFullSlug,
  simplifySlug,
  joinSegments,
  endsWith,
  trimSuffix,
  stripSlashes,
  getFileExtension,
  isFolderPath,
  getAllSegmentPrefixes,
  pathToRoot,
  resolveRelative,
  splitAnchor,
  normalizeHastElement,
} from "@quartz-community/utils"

export type {
  FilePath,
  FullSlug,
  SimpleSlug,
  RelativeURL,
  TransformOptions,
} from "@quartz-community/utils"

// --- v5-specific exports below ---

export const QUARTZ = "quartz"

function removeDiacritics(value: string): string {
  return value.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

export function slugifyFilePath(fp: FilePath, excludeExt?: boolean): FullSlug {
  const normalizedPath = removeDiacritics(fp.normalize("NFC")) as FilePath
  const slug = quartzSlugifyFilePath(normalizedPath, excludeExt).normalize("NFC")
  const extension = normalizedPath.match(/\.[A-Za-z0-9]+$/)?.[0]
  const isPagePath = excludeExt || extension === ".md" || extension === ".html" || extension === undefined
  if (isPagePath && slug !== "index" && slug !== "404" && !slug.endsWith("/index")) {
    return `${slug}/index` as FullSlug
  }
  return slug as FullSlug
}

export function slugTag(tag: string): string {
  return quartzSlugTag(removeDiacritics(tag.normalize("NFC"))).normalize("NFC")
}

export function transformInternalLink(link: string): RelativeURL {
  return quartzTransformInternalLink(removeDiacritics(link.normalize("NFC"))).normalize("NFC") as RelativeURL
}

export function transformLink(src: FullSlug, target: string, opts: TransformOptions): RelativeURL {
  const normalizedSlugs = opts.allSlugs.map((slug) => slug.normalize("NFC") as FullSlug)
  return quartzTransformLink(src.normalize("NFC") as FullSlug, removeDiacritics(target.normalize("NFC")), {
    ...opts,
    allSlugs: normalizedSlugs,
  }).normalize("NFC") as RelativeURL
}

// from micromorph/src/utils.ts
// https://github.com/natemoo-re/micromorph/blob/main/src/utils.ts#L5
const _rebaseHtmlElement = (el: Element, attr: string, newBase: string | URL) => {
  const rebased = new URL(el.getAttribute(attr)!, newBase)
  el.setAttribute(attr, rebased.pathname + rebased.hash)
}
export function normalizeRelativeURLs(el: Element | Document, destination: string | URL) {
  el.querySelectorAll('[href=""], [href^="./"], [href^="../"]').forEach((item) => {
    _rebaseHtmlElement(item, "href", destination)
  })
  el.querySelectorAll('[src=""], [src^="./"], [src^="../"]').forEach((item) => {
    _rebaseHtmlElement(item, "src", destination)
  })
}
