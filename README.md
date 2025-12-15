# Componet Library

## Lab Overview

In this lab, you will create a set of reusable UI components for your company’s internal component library. You will practice creating TypeScript React components with proper prop typing, component composition, and prop handling. This lab focuses on component creation, TypeScript interfaces, prop handling, and component composition using React and TypeScript.

# Reflection

1. How did you handle optional props in your components?
  I used the ? operator in the TypeScript interfaces (e.g., showEmail?: boolean) to mark props as optional. Inside the components, I used conditional rendering (like {showEmail && ...} or ternary operators) to display content only when those props were provided, and standard conditional checks for optional callbacks (e.g., onClose && onClose()).

2. What considerations did you make when designing the component interfaces?
  I focused on reusability and clarity by separating data objects (like User and Product) from UI configuration props (like showRole or showStockStatus). I also prioritized type safety by using specific Union Types (e.g., 'success' | 'error') for the AlertBox to preventing invalid states, rather than allowing any generic string.

3. How did you ensure type safety across your components?
  I created a central types/index.ts file to define shared interfaces and exported them for use in both the components and the main App. I utilized React.FC<Props> to enforce that each component received exactly the correct data shape, ensuring that properties like product.price were treated as numbers for math operations and children were handled as React.ReactNode.

4. What challenges did you face when implementing component composition?
  The main challenge was correctly passing state and event handlers down from the parent App component into the child components (like onAddToCart). It required ensuring the callback function signatures in the parent matched exactly what the child component interfaces expected (e.g., receiving a productId string vs. no arguments).