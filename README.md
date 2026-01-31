# Redux Counter & Box Resize Demo

A modern Next.js application demonstrating Redux Toolkit state management through two interactive examples: a Counter and a Dynamic Box Resizer with color picker.

## 📸 Screenshots

### Redux Counter
![Redux Counter](react-login/screenshots/redux_counter.png)

### Redux Box Resize
![Redux Box Resize](react-login/screenshots/redux_resize.png)

## ✨ Features

### Counter Component
- ➕ Increment counter
- ➖ Decrement counter (with minimum value of 0)
- Clean, minimalist UI with gradient background
- Smooth animations and transitions

### Box Resize Component
- 📏 Dynamic box resizing (40px - 300px)
- 🎨 Color picker with three preset colors (Blue, Red, Green)
- 🎚️ Interactive range slider for precise size control
- ➕➖ Increment/Decrement buttons for size adjustment
- Real-time size display
- Smooth CSS transitions

## 🛠️ Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **State Management:** Redux Toolkit
- **Language:** TypeScript
- **Styling:** Inline CSS with modern design patterns
- **UI:** React with hooks

## 📁 Project Structure

```
├── app/
│   ├── page.tsx                    # Counter component (Home)
│   ├── box/
│   │   └── page.tsx               # Box resize component
│   └── ReduxProvider.tsx          # Redux Provider wrapper
├── store/
│   ├── store.ts                   # Redux store configuration
│   ├── counterSlice.ts            # Counter state slice
│   └── boxSlice.ts                # Box state slice
└── screenshots/
    ├── redux_counter/             # Counter screenshot
    └── redux_resize.png           # Box resize screenshot
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn or pnpm

### Installation

1. Clone the repository
```bash
git clone <repository-url>
cd <project-directory>
```

2. Install dependencies
```bash
npm install
# or
yarn install
# or
pnpm install
```

3. Run the development server
```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

4. Open your browser and navigate to:
   - Counter: `http://localhost:3000`
   - Box Resize: `http://localhost:3000/box`

## 🧩 Component Details

### Counter Slice (`counterSlice.ts`)

```typescript
State:
  - value: number (default: 0)

Actions:
  - increment(): Increases value by 1
  - decrement(): Decreases value by 1 (minimum: 0)
```

### Box Slice (`boxSlice.ts`)

```typescript
State:
  - size: number (default: 100, range: 40-300)
  - color: string (default: "dodgerblue")

Actions:
  - increaseSize(): Increases size by 20px
  - decreaseSize(): Decreases size by 20px (minimum: 40px)
  - setSize(value): Sets exact size value
  - changeColor(color): Changes box color
```

### Redux Store (`store.ts`)

Combines multiple reducers:
- `counter`: Manages counter state
- `box`: Manages box resize and color state

### Redux Provider (`ReduxProvider.tsx`)

Client-side wrapper component that provides Redux store to the entire application.

## 💡 Key Concepts Demonstrated

1. **Redux Toolkit Integration**
   - Modern Redux setup with `createSlice`
   - Simplified reducer logic with Immer
   - Type-safe state management

2. **React-Redux Hooks**
   - `useSelector` for reading state
   - `useDispatch` for dispatching actions

3. **Next.js App Router**
   - Client components with `"use client"` directive
   - Custom provider pattern
   - Multiple routes

4. **TypeScript Integration**
   - Type-safe Redux store
   - Typed action payloads
   - React component typing

## 🎨 Design Features

- Modern gradient backgrounds
- Card-based layouts with shadows
- Smooth transitions and animations
- Responsive button designs
- Clean typography
- Color-coded interactive elements

## 📝 Usage Examples

### Accessing Counter State
```typescript
const count = useSelector((state) => state.counter.value);
```

### Dispatching Counter Actions
```typescript
dispatch(increment());
dispatch(decrement());
```

### Accessing Box State
```typescript
const { size, color } = useSelector((state) => state.box);
```

### Dispatching Box Actions
```typescript
dispatch(increaseSize());
dispatch(decreaseSize());
dispatch(setSize(150));
dispatch(changeColor("tomato"));
```

## 🔧 Customization

### Adding New Colors
Edit the color array in `box/page.tsx`:
```typescript
[
  { color: "dodgerblue", label: "Blue" },
  { color: "tomato", label: "Red" },
  { color: "seagreen", label: "Green" },
  { color: "purple", label: "Purple" }, // Add new color
]
```

### Adjusting Size Range
Modify the range slider in `box/page.tsx`:
```typescript
<input
  type="range"
  min="40"    // Minimum size
  max="300"   // Maximum size
  value={size}
/>
```

### Changing Step Values
Edit increment/decrement amounts in `boxSlice.ts`:
```typescript
increaseSize: (state) => {
  state.size += 20; // Change this value
}
```

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!



**Built with ❤️ using Next.js and Redux Toolkit**