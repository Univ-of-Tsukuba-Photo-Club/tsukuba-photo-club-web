import React, { useEffect, useState, useRef } from "react"
import { css } from "@emotion/core"

type Props = {
  imageUrls: string[]
}

const Slideshow: React.FC<Props> = (props) => {
  const { imageUrls, linkUrl, linkUrl2, linkUrl2order } = props

  const [urlIdx, setUrlIdx] = useState(0)

  const ref = useRef({ imageUrls })
  useEffect(() => {
    const timer = setTimeout(() => {
      const isLast = ref.current.imageUrls.length - 1
      setUrlIdx(urlIdx !== isLast ? urlIdx + 1 : 0)
    }, 6000)
    return () => clearTimeout(timer)
  }, [urlIdx])

  return (
    <>
      <a
        href={ urlIdx === 0 ? linkUrl : urlIdx === linkUrl2order ? linkUrl2 : "" }
        tabindex={
          linkUrl !== "" && urlIdx === 0 ? "" :
          linkUrl2 !== "" && urlIdx === linkUrl2order ? "" : "-1"
        }
      >
        {imageUrls.map((url, idx) => (
          <img
            key={url}
            css={css({
              width: "100vw",
              maxHeight: "90vh",
              alignSelf: "center",
              objectFit: "contain",
              position: "absolute",
              opacity: idx === urlIdx ? "1" : "0",
              transition: "opacity 1s ease",
            })}
            src={url}
          />
        ))}
      </a>
    </>
  )
}

export default Slideshow
