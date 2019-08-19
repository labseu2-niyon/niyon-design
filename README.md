# niyon-design

run ```yarn```

## To use locally
run ```yarn link``` in this project

use ```yarn link niyon-design``` in another react project, then use as use as usual i.e. ```import <component> from 'niyon-design```

## To use from npm
create a react app

```yarn add niyon-design```

```import <component> from 'niyon-design'```

# Components

## Card

```jsx
import { Card } from 'niyon-design';

<Card>
  text
</Card>
```

## Button

```jsx
import { Button } from 'niyon-design';

<Button>
  text
</Button>
```

* props

- outline: bool
- raised: bool
- variant: string - "primary" || "secondary"
