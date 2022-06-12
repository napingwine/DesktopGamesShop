import { useEffect, useState } from "react";
import useWindowDimensions from "./useWindowDimensions"

/**  
 * 
 * this hook count proportions of block and img to define how to cut img, by width or by height.
 * 
 * return string 'proportion-width' or 'proportion-height'
 * 
 */
export default function useElementDimensionsProportion(element: any, photoURL: string) {
  const [imgProportions, setImgProportions] = useState<number>(1);
  const [blockProportions, setBlockProportions] = useState<number>(1);
  const [proportionClassForImg, setProportionClassForImg] = useState<string>('proportion-width');
  const { width: windowWidth } = useWindowDimensions();

  let img = new Image();
  img.src = photoURL
  img.onload = () => {
    setImgProportions(img.width / img.height)
  };

  useEffect(() => {
    setBlockProportions(element?.current?.clientWidth / element?.current?.clientHeight)
  }, [windowWidth]);

  useEffect(() => {
    if (blockProportions >= imgProportions) {
      setProportionClassForImg('proportion-width');
    } else {
      setProportionClassForImg('proportion-height');
    }
  }, [blockProportions, windowWidth]);

  return proportionClassForImg;
}