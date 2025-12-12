import React from 'react';

// --- Alert Types --- //
export type AlertType = 'success' | 'error' | 'warning' | 'info';

export interface AlertBoxProps {
    type: AlertType;
    message: string;
    onClose?: () => void;
    children?: React.ReactNode;
}

// --- User Types --- //
export interface User {
    id: string;
    name: string;
    email: string;
    role: string;
    avatarUrl?: string;
}

export interface UserProfileCardProps {
    user: User;
    showEmail?: boolean;
    showRole?: boolean;
    onEdit?: (userId: string) => void;
    children?: React.ReactNode;
}

// --- Product Types --- //
export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    imageUrl?: string;
    inStock?: boolean;
}

export interface ProductCardProps {
    product: Product;
    showDescription?: boolean;
    showStockStatus?: boolean;
    onAddToCart?: (productId: string) => void;
    children?: React.ReactNode;
}

// ### --- Types --- ### ///

/**In the context of TypeScript and React, types are rules or "blueprints"
 * that describe the shape and kind of data your code works with.
 * They act as a contract that tells your program what to expect for variables,
 * function parameters, and component props.
 * The main purpose of using types is to catch errors early,
 * before you even run the code, and to make your code more predictable and easier to work with.
 * */