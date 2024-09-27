const pattern = /^image-([a-f\d]+)-(\d+x\d+)-(\w+)$/

const decodeSanityAsset = (id: string) => {
  const [, assetId, dimensions, format]: any = pattern.exec(id)
  const [width, height] = dimensions.split("x").map((v: any) => parseInt(v, 10))

  return {
    assetId,
    dimensions: { width, height },
    format,
  }
}

export default decodeSanityAsset;