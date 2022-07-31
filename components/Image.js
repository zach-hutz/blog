import NextImage from 'next/image'

// eslint-disable-next-line jsx-a11y/alt-text
// opt-out of image optimization, no-op
const customLoader = ({ src }) => {
  return src
}

export default function Image(props) {
  return <NextImage {...props} loader={customLoader} />
}
