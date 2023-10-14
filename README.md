# classcraft

Seamlessly craft and conditionally concatenate class names for your web elements. Make every element's style truly a masterpiece 🚀

## Installation

```bash
npm install classcraft --save
```

or

```bash
yarn add classcraft
```

## Usage

```typescript
import classcraft from "classcraft";

const classes = classcraft("foo", { bar: true, baz: false });
console.log(classes); // Outputs: "foo bar"
```

## Examples

### Simple Usage

```typescript
import React from "react";
import classcraft from "classcraft";

function Button({ primary, disabled, children }) {
  return (
    <button
      className={classcraft(
        "button",
        { "button--primary": primary },
        { "button--disabled": disabled }
      )}
    >
      {children}
    </button>
  );
}

export default Button;
```

### Advanced Usage

```typescript
import React from "react";
import classcraft from "classcraft";

function Card({ featured, highlighted, darkMode, extraClass, children }) {
  return (
    <div
      className={classcraft(
        "card",
        { "card--featured": featured },
        { "card--highlighted": highlighted },
        { "card--dark": darkMode },
        extraClass // this could be a string or an object
      )}
    >
      {children}
    </div>
  );
}

export default Card;
```

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## Author

**Martik Avagyan**

- Website: [martikavagyan.com](https://martikavagyan.com)
- Twitter: [@martikavagyan](https://twitter.com/martikavagyan)
- GitHub: [@m-avagyan](https://github.com/m-avagyan)

## License

[MIT](https://choosealicense.com/licenses/mit/)
