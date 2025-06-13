# @insafinhaam732/component-library

A modern, reusable React component library built with **TypeScript** and **Rollup**.

## 📦 Installation

Install the package via NPM:

```bash
npm install @insafinhaam732/component-library
```

## 🚀 Usage

### 🖱️ Button

```tsx
import { Button } from "@insafinhaam732/component-library";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function App() {
  return (
    <Button
      label="Click Me"
      variant="default"
      size="lg"
      startIcon={<FaArrowLeft />}
      endIcon={<FaArrowRight />}
      onClick={() => alert("Clicked!")}
      className="my-custom-class"
    />
  );
}
```

### 🧭 Breadcrumb

```tsx
import { Breadcrumb } from "@insafinhaam732/component-library";

function App() {
  return (
    <Breadcrumb
      items={[
        { label: "Home", href: "/" },
        { label: "Dashboard", href: "/dashboard" },
        { label: "Reports" }, // current page
      ]}
    />
  );
}
```

### 📄 Pagination

```tsx
import { Pagination } from "@insafinhaam732/component-library";
import { useState } from "react";

function App() {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Pagination
      currentPage={currentPage}
      totalPages={10}
      onPageChange={(page) => setCurrentPage(page)}
    />
  );
}
```

### 📥 Form Components

```tsx
import {
  Input,
  Textarea,
  Select,
  Checkbox,
  RadioGroup,
  ToggleSwitch,
} from "@insafinhaam732/component-library";
```

#### 🔤 Input

```tsx
<Input
  label="Email"
  type="email"
  placeholder="example@gmail.com"
  required
  iconLeft={<i className="bx bx-envelope" />}
/>

<Input
  label="Password"
  type="password"
  placeholder="Enter your password"
  error="Password is required"
  iconRight={<i className="bx bx-lock" />}
/>
```

#### 📝 Textarea

```tsx
<Textarea
  label="Message"
  placeholder="Write your message here..."
  required
/>

<Textarea
  label="Comments"
  value={comment}
  onChange={(e) => setComment(e.target.value)}
  error="Comment cannot be empty"
/>
```

#### 📂 Select

```tsx
<Select
  label="Select your role"
  options={[
    { label: "Admin", value: "admin" },
    { label: "User", value: "user" },
  ]}
  placeholder="Choose one"
  required
/>
```

#### ☑️ Checkbox

```tsx
<Checkbox label="I accept the terms and conditions" />
<Checkbox label="Indeterminate state" indeterminate />
```

#### 🔘 Radio Group

```tsx
<RadioGroup
  label="Choose a plan"
  name="plan"
  value={plan}
  onChange={setPlan}
  options={[
    { label: "Free", value: "free" },
    { label: "Pro", value: "pro" },
    { label: "Enterprise", value: "enterprise" },
  ]}
/>
```

#### 🔀 Toggle Switch

```tsx
<ToggleSwitch
  checked={notificationsEnabled}
  onChange={setNotificationsEnabled}
  label="Enable Notifications"
/>
```

#### 📅 Date Picker

```tsx
<DatePicker label="Select date" value={date} onChange={setDate} />
```

#### 📁 File Upload

```tsx
<FileUpload
  label="Upload resume"
  onChange={(files) => console.log(files)}
  multiple
  accept=".pdf,.docx"
/>
```

---

## 🛠️ Built With

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Rollup](https://rollupjs.org/)

## 🌐 Browser Support

Tested and compatible with:

- Chrome
- Firefox
- Safari

## 📄 License

This project is licensed under the **MIT License**.

```
Developed by Insaf Inhaam
```

## ©️ Copyright

```
Copyright (c) 2025 Insaf Inhaam
Licensed under the MIT and GPL licenses.
```
