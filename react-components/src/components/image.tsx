
interface imageProps{
    src: string;
    altText: string;
    height?: string | number;
    width?: string | number;
}

// image component can accept props and is reusable
function Image({ src, altText, height,width}: imageProps) {
  return (
    <img src={src} alt={altText} height={height} width={width} />
  )
}

export default Image


// method 2 + arrow function
// const Image2: React.FC<imageProps> = ({ src, altText, height, width }) => {
//     return (
//         <img src={src} alt={altText} height={height} width={width} />
//     )
// }

// export default Image2;