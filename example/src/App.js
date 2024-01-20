import React from 'react'

import { NNavigator, NormalDesktopHeader, PulsingCircleHeader } from 'nreact-navigator'
import 'nreact-navigator/dist/index.css'
import { BlueRed as theme } from 'nreact-colors'
import brandIcon from './eagle head logo.png'

const App = () => {
  // theme.primaryText = 'red';
  return <NNavigator
    theme={theme}
    brandName={'Nreact Navigator'}
    brandIcon={brandIcon}

    // desktopHeader={NormalDesktopHeader}
    // phoneHeader={PulsingCircleHeader}
    responsiveHeader={[
      {minWidth:0, maxWidth: 700, header: PulsingCircleHeader},
      // {minWidth:700, maxWidth: 10000, header: NormalDesktopHeader},
    ]}

    menuItems={[
      { text: "About", id: 1, href: "#" },
      { text: "Contact", id: 2, href: "#" },
      { text: "Projects", id: 3, href: "#" },
      { text: "Weblog", id: 4, href: "#" }
    ]
    } // todo nested menu items
    // menuItemClickHandler={(itemId) => console.log(itemId)} // todo
    footerMessage="Made by ❤️"
  >
    <h1>This is NNavigator testtttttt</h1>
    <p>This library helps developers to make a stable and reusable structure for web projects</p>


    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at purus in ante auctor gravida vitae eget mi. Morbi ipsum sem, hendrerit nec eros a, blandit laoreet felis. Nam efficitur sed ex sed sollicitudin. Donec pellentesque, diam commodo placerat blandit, velit dolor gravida massa, at vehicula magna turpis eget enim. Donec dictum ut velit sed dictum. Quisque aliquet felis sit amet neque elementum rutrum. Donec fermentum leo non sem euismod, ac euismod urna scelerisque. Suspendisse potenti. Maecenas turpis metus, tincidunt eget magna tincidunt, molestie pellentesque urna. Sed accumsan non augue vestibulum finibus. Sed pharetra tortor et metus hendrerit ultricies. Vestibulum condimentum enim at mauris laoreet convallis. Nam quis felis in lacus bibendum congue eu tempus sapien. Proin id sapien quam.

    Nulla facilisi. Praesent tincidunt venenatis lorem, a pretium elit ultrices et. Morbi ac libero dui. Donec nec facilisis quam. Morbi eget convallis ipsum, sodales vehicula purus. Donec et fermentum risus. Fusce nunc risus, posuere at mauris quis, faucibus tempus quam. Proin pretium erat sit amet nibh lacinia fermentum. Donec tincidunt luctus felis non consectetur. Nam quis purus non augue vulputate vulputate. Morbi mattis congue urna vel commodo. Vestibulum nec tincidunt arcu. Fusce convallis tincidunt enim, id porta mi rhoncus sit amet. Maecenas at lobortis tortor. Vivamus vitae lacus ac metus lacinia tempor sit amet at sapien. Suspendisse tempor, augue non viverra sagittis, nibh turpis sagittis nisl, a lacinia massa ex vel arcu.

    Sed vitae ex venenatis, ullamcorper leo vitae, maximus nunc. Integer placerat, risus eget tempus ultrices, leo quam euismod ex, a auctor ex quam suscipit turpis. Ut mattis eros accumsan luctus congue. Integer placerat ut odio sit amet dapibus. Nam nec elementum sem. Duis posuere leo pulvinar mi mollis, ac malesuada eros sollicitudin. Mauris rhoncus auctor sagittis. Morbi ornare mollis ex, eleifend rutrum augue tempor at. Donec dapibus neque pretium tempor auctor.
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec at purus in ante auctor gravida vitae eget mi. Morbi ipsum sem, hendrerit nec eros a, blandit laoreet felis. Nam efficitur sed ex sed sollicitudin. Donec pellentesque, diam commodo placerat blandit, velit dolor gravida massa, at vehicula magna turpis eget enim. Donec dictum ut velit sed dictum. Quisque aliquet felis sit amet neque elementum rutrum. Donec fermentum leo non sem euismod, ac euismod urna scelerisque. Suspendisse potenti. Maecenas turpis metus, tincidunt eget magna tincidunt, molestie pellentesque urna. Sed accumsan non augue vestibulum finibus. Sed pharetra tortor et metus hendrerit ultricies. Vestibulum condimentum enim at mauris laoreet convallis. Nam quis felis in lacus bibendum congue eu tempus sapien. Proin id sapien quam.

    Nulla facilisi. Praesent tincidunt venenatis lorem, a pretium elit ultrices et. Morbi ac libero dui. Donec nec facilisis quam. Morbi eget convallis ipsum, sodales vehicula purus. Donec et fermentum risus. Fusce nunc risus, posuere at mauris quis, faucibus tempus quam. Proin pretium erat sit amet nibh lacinia fermentum. Donec tincidunt luctus felis non consectetur. Nam quis purus non augue vulputate vulputate. Morbi mattis congue urna vel commodo. Vestibulum nec tincidunt arcu. Fusce convallis tincidunt enim, id porta mi rhoncus sit amet. Maecenas at lobortis tortor. Vivamus vitae lacus ac metus lacinia tempor sit amet at sapien. Suspendisse tempor, augue non viverra sagittis, nibh turpis sagittis nisl, a lacinia massa ex vel arcu.

    Sed vitae ex venenatis, ullamcorper leo vitae, maximus nunc. Integer placerat, risus eget tempus ultrices, leo quam euismod ex, a auctor ex quam suscipit turpis. Ut mattis eros accumsan luctus congue. Integer placerat ut odio sit amet dapibus. Nam nec elementum sem. Duis posuere leo pulvinar mi mollis, ac malesuada eros sollicitudin. Mauris rhoncus auctor sagittis. Morbi ornare mollis ex, eleifend rutrum augue tempor at. Donec dapibus neque pretium tempor auctor.

    Nam tempus finibus sem, in fermentum erat vehicula quis. In massa diam, aliquam id ullamcorper eget, fringilla et quam. Fusce vel magna non lectus rhoncus pulvinar ac volutpat purus. Etiam tempor nulla mollis velit aliquam rhoncus. Ut non rutrum lacus, in consequat diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tincidunt ex sit amet sem volutpat, nec lobortis leo pellentesque.
    Nulla facilisi. Praesent tincidunt venenatis lorem, a pretium elit ultrices et. Morbi ac libero dui. Donec nec facilisis quam. Morbi eget convallis ipsum, sodales vehicula purus. Donec et fermentum risus. Fusce nunc risus, posuere at mauris quis, faucibus tempus quam. Proin pretium erat sit amet nibh lacinia fermentum. Donec tincidunt luctus felis non consectetur. Nam quis purus non augue vulputate vulputate. Morbi mattis congue urna vel commodo. Vestibulum nec tincidunt arcu. Fusce convallis tincidunt enim, id porta mi rhoncus sit amet. Maecenas at lobortis tortor. Vivamus vitae lacus ac metus lacinia tempor sit amet at sapien. Suspendisse tempor, augue non viverra sagittis, nibh turpis sagittis nisl, a lacinia massa ex vel arcu.

    Sed vitae ex venenatis, ullamcorper leo vitae, maximus nunc. Integer placerat, risus eget tempus ultrices, leo quam euismod ex, a auctor ex quam suscipit turpis. Ut mattis eros accumsan luctus congue. Integer placerat ut odio sit amet dapibus. Nam nec elementum sem. Duis posuere leo pulvinar mi mollis, ac malesuada eros sollicitudin. Mauris rhoncus auctor sagittis. Morbi ornare mollis ex, eleifend rutrum augue tempor at. Donec dapibus neque pretium tempor auctor.

    Nam tempus finibus sem, in fermentum erat vehicula quis. In massa diam, aliquam id ullamcorper eget, fringilla et quam. Fusce vel magna non lectus rhoncus pulvinar ac volutpat purus. Etiam tempor nulla mollis velit aliquam rhoncus. Ut non rutrum lacus, in consequat diam. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris tincidunt ex sit amet sem volutpat, nec lobortis leo pellentesque.

    Morbi gravida purus et nisi facilisis, eget sodales dolor tincidunt. Nam tincidunt pretium felis, congue consectetur lectus pretium non. Duis at lacus iaculis, eleifend leo a, molestie felis. Mauris efficitur nisi ut orci sagittis venenatis. Donec ut ex et urna fringilla iaculis. Ut quis egestas massa. Praesent et diam accumsan, molestie velit non, pellentesque lectus. Mauris ornare vehicula pellentesque. Etiam tincidunt malesuada odio, ut finibus libero tincidunt in. Duis et sem sit amet quam pellentesque tristique non quis ligula. Aenean bibendum enim tempor, scelerisque lorem vitae, rhoncus justo. Vivamus in ligula sed quam bibendum consectetur. Nulla non sapien pharetra, dapibus libero sed, bibendum lacus. Proin purus velit, ultrices quis consequat ac, lobortis et tellus. Curabitur sit amet diam diam.
  </NNavigator>
};

export default App;
