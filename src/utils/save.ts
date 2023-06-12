export default async function downloadBlobFile({
  blob,
  title,
}: {
  blob: Blob
  title: string
}): Promise<void> {
  const blobURL = await URL.createObjectURL(blob)
  const aLink = document.createElement('a')
  aLink.href = blobURL
  aLink.download = title
  document.body.appendChild(aLink)
  aLink.click()
  document.body.removeChild(aLink)
  URL.revokeObjectURL(blobURL)
}
