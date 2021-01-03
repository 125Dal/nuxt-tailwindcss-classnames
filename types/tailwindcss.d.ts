type Sign = '' | '-'
type XY = 'x' | 'y'

/// Space Styles

type TSpaceSuffix =
  0  | 1  | 2  | 3  | 4  | 5  | 6  | 8  | 10 |
  12 | 16 | 20 | 24 | 32 | 40 | 48 | 56 | 64 |
  'px'

type TSpase =
  `${Sign}space-${XY}-${TSpaceSuffix}` |
  'space-y-reverce' |
  'space-y-reverce'

/// Divide Width Styles

type TDivideWidthSufficx =
  0 | 2 | 4 | 8 | 'reverse'

type TDivideWidth =
  `divide-${XY}-${TDivideWidthSufficx}` |
  'divide-y' |
  'divide-x'

/// Divide Color Styles

type TDivideType =
  'transparent' | 'current' | 'black' | 'white'

type TDivideColorType =
  'gray' | 'red' | 'orange' | 'yellow' | 'green' |
  'teal' | 'blue' | 'indigo' | 'purple' | 'pink'

type TDivideChroma =
  100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900

type TDivideColor =
  `divide-${TDivideType}` |
  `divide-${TDivideColorType}-${TDivideChroma}`

/// Divide Style Styles

type TDivideStyleType =
  'solid' | 'dashed' | 'dotted' | 'double' | 'none'

type TDivideStyle =
  `divide-${TDivideStyleType}`

/// Divide Opacity Styles

type TDivideOpacityStrength =
  0 | 25 | 50 | 75 | 100

type TDivideOpacity =
  `divide-opacity-${TDivideOpacityStrength}`
