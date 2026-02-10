interface User { id: number; name: string; email: string; }

const newUser: User = { id: 1, name: "Pranjali", email: "pranjali@example.com" };

console.log("Mock Database Entry Created for: " + newUser.name);