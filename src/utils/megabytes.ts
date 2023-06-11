export default function megabytes(bytes: number) {
  const megabytes = bytes / 1024 ** 2
  return megabytes.toFixed(1)
}
