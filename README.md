# first-letter-avatar


## Install

```shell
npm install first-letter-avatar --save
```

## Usage

```js
import { FirstLetterAvatar } from 'first-letter-avatar';

const avatar = new FirstLetterAvatar({
    avatarsSelector: ".avatar",
    namesSelector: ".userName",
    backgroundColor: "#171923",
    letterColor: "#fff",
    isCircle: true,
}).renderAvatar();
```

The number of `avatarsSelector` and `namesSelector` elements must be the same.

### Example
```html
<div class="comment">
    <!-- .... -->
    <div class="avatar"></div>
    <p class="userName">Lisa</p>
    <!-- .... -->
</div>
```

Recommended **CSS** for ``.avatar``
```css
.avatar {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
  width: 60px;
  user-select: none;
}
```

### Options

| Name | Type | Description
| --- | --- | --- |
| avatarsSelector | string | Element selector to create an avatar **`Required`** |
| namesSelector | string | Direct selector containing the username **`Required`** |
| backgroundColor | string | Letter background color  **`Default: #151515`** You can set the value to **`random`**, after the colors for each avatar will be random. List of random colors after the table.|
| letterColor | string | Letter color  **`Default: #ffffff`** |
| fontSize | string | Changes the `font-size` of a letter  **`Default: 1.5rem`** |
| isCircle | boolean | Makes the avatar round  **`Default: false`** |
| isBold | boolean | Makes a letter bold **`Default: false`** |

### List of random colors

```js
 // List of Flat UI Colors
["#1abc9c", "#16a085", "#f1c40f", "#f39c12", "#2ecc71", "#27ae60", "#e67e22", "#d35400", "#3498db", "#2980b9", "#e74c3c", "#c0392b", "#9b59b6", "#8e44ad", "#34495e", "#2c3e50", "#95a5a6", "#7f8c8d"]
```
![random-colors](https://user-images.githubusercontent.com/22887185/149675953-aeaad157-1fef-4025-bacb-2d331f6b1e28.png)
