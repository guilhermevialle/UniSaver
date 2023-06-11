export default async function save(blob: Blob, title: string): Promise<void> {
  const blobURL = window.URL.createObjectURL(
    new Blob([blob], { type: blob.type })
  )
  const aLink = document.createElement('a')
  aLink.href = blobURL
  aLink.download = title
  aLink.style.display = 'none'
  document.body.appendChild(aLink)

  const clickEvent = new MouseEvent('click')
  aLink.dispatchEvent(clickEvent)

  document.body.removeChild(aLink)
  window.URL.revokeObjectURL(blobURL)
}
