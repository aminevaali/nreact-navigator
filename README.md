
# nreact-navigator

  

## Main idea

NReact libraries comprise a collection of tools designed to facilitate and accelerate the development of various types of web applications.

[![NPM](https://img.shields.io/npm/v/nreact-navigator.svg)](https://www.npmjs.com/package/nreact-navigator) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

  

### 3 types of web apps
1.  Simple Vitrine to Showcase Data
--  The primary objective is to present data in a clear and acceptable format.

2.  Semi-Customized Web Apps
-- Similar to type 1, but with the added flexibility for certain parts of the web app to be customized, while other sections can utilize default components.

3.  Fully Customized web apps
--  In this category, nearly every aspect of the web app should be customized to meet specific requirements.

While there are numerous tools and frameworks available to expedite web app development (e.g., WordPress), most of them excel in addressing only types 1 and 2. For instance, attempting to create a fully customized and complex web app (type 3) using WordPress can lead to challenges.

  

Conversely, if you choose to manually code a simple showcase web app, you may find it tiresome to write extensive code for a straightforward task.

  

NReact libraries are being developed to help create all three types of websites quickly and elegantly.
  

## Install

  

```bash

npm  install  --save  nreact-navigator

```

  

## Usage

  

```jsx

import  React  from  'react'

import { NNavigator } from  'nreact-navigator'
import  brandIcon  from  './eagle head logo.png'

  
theme  = {
primary:  "#2196F3",
darkPrimary:  "#1976D2",
lightPrimary:  "#BBDEFB",
text_icon:  "#FFFFFF",
accent:  "#FF5252",
primaryText:  "#212121",
secondaryText:  "#757575",
dividerColor:  "#BDBDBD"
};

  
const  App  = () => {
	return  <NNavigator
		theme={theme}
		brandName={'Nreact Navigator'}
		brandIcon={brandIcon}

		menuItems={[
		{ text:  "About", id:  1, href:  "#" },
		{ text:  "Contact", id:  2, href:  "#" },
		{ text:  "Projects", id:  3, href:  "#" },
		{ text:  "Weblog", id:  4, href:  "#" }
		]}

		footerMessage="Made with ❤️ by nreact libraries"
		>

		<h1>This is NNavigator library test</h1>
		<p>This library helps developers to make a stable and reusable structure for web projects</p>

		</NNavigator>
};

export  default  App;
```

  

## License
MIT © [aminevaali](https://github.com/aminevaali)
