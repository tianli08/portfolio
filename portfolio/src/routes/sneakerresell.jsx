import React, { useState, useEffect, useMemo } from 'react';
import './sneakerresell.css';

const staticProducts = [
    { id: 1, name: 'Jordan 1 High "Chicago"', brand: 'Jordan', color: 'Red', price: 350, availableSizes: [8, 8.5, 9, 9.5, 10, 11.5, 12], imageUrl: "/lnf.jpg"},
    { id: 2, name: 'Nike Dunk Low "Panda"', brand: 'Nike', color: 'Black', price: 180, availableSizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11], imageUrl: "/panda.jpg" },
    { id: 3, name: 'Adidas Yeezy 350 "Zebra"', brand: 'Adidas', color: 'White', price: 280, availableSizes: [9, 9.5, 10, 10.5, 11, 11.5], imageUrl: "/zebra.jpg" },
    { id: 4, name: 'New Balance 550 "Syracuse"', brand: 'New Balance', color: 'White', price: 160, availableSizes: [7, 7.5, 8, 8.5, 9], imageUrl: "/syracuse.jpg"},
    { id: 5, name: 'Jordan 4 "Military Black"', brand: 'Jordan', color: 'Black', price: 320, availableSizes: [9.5, 10, 10.5, 11, 11.5, 12, 13], imageUrl: "/military.jpg"},
    { id: 6, name: 'Nike Air Force 1 "White"', brand: 'Nike', color: 'White', price: 110, availableSizes: [7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13], imageUrl: "/triplewhite.jpg"},
    { id: 7, name: 'Adidas Forum Low "Bad Bunny"', brand: 'Adidas', color: 'Grey', price: 250, availableSizes: [8, 8.5, 9, 9.5], imageUrl: "/forum.jpg" },
    { id: 8, name: 'Nike SB Dunk "Chunky Dunky"', brand: 'Nike', color: 'Blue', price: 1500, availableSizes: [9, 9.5, 10], imageUrl: "/chunky.jpg" },
    { id: 9, name: 'New Balance 990v5 "Grey"', brand: 'New Balance', color: 'Grey', price: 200, availableSizes: [8, 8.5, 9, 9.5, 10, 10.5, 11], imageUrl: "/990v5.jpg" },
    { id: 10, name: 'Jordan 11 "Cool Grey"', brand: 'Jordan', color: 'Grey', price: 300, availableSizes: [10, 10.5, 11, 11.5, 12], imageUrl: "/coolgrey.jpg" },
    { id: 11, name: 'Nike Air Max 90 "Infrared"', brand: 'Nike', color: 'Red', price: 140, availableSizes: [7.5, 8, 8.5, 9, 9.5, 10], imageUrl: "/am90.jpg" },
    { id: 12, name: 'Adidas Yeezy 700 "Wave Runner"', brand: 'Adidas', color: 'Grey', price: 340, availableSizes: [8, 8.5, 9, 9.5, 10, 10.5], imageUrl: "/waverunner.jpg" },
    { id: 13, name: 'Nike Blazer Mid \'77 "White Black"', brand: 'Nike', color: 'White', price: 100, availableSizes: [7, 8, 9, 10, 11, 12], imageUrl: "/blazer.jpg" },
    { id: 14, name: 'Jordan 3 "White Cement"', brand: 'Jordan', color: 'White', price: 290, availableSizes: [9, 9.5, 10, 10.5, 11, 12], imageUrl: "/wc3.jpg" },
    { id: 15, name: 'New Balance 2002R Protection Pack "Rain Cloud"', brand: 'New Balance', color: 'Grey', price: 220, availableSizes: [8.5, 9, 9.5, 10, 10.5], imageUrl: "/raincloud.jpg" },
    { id: 16, name: 'Adidas Samba OG', brand: 'Adidas', color: 'Black', price: 85, availableSizes: [7, 7.5, 8, 8.5, 9, 9.5], imageUrl: "/samba.jpg" },
    { id: 17, name: 'Jordan 5 "Raging Bull"', brand: 'Jordan', color: 'Red', price: 260, availableSizes: [9, 10, 11, 12], imageUrl: "/ragingbull.jpg" },
    { id: 18, name: 'Nike Dunk High "Syracuse"', brand: 'Nike', color: 'Blue', price: 175, availableSizes: [9.5, 10, 10.5, 11], imageUrl: "/syracusedunk.jpg" },
    { id: 19, name: 'Adidas Ultraboost 4.0 "Triple White"', brand: 'Adidas', color: 'White', price: 180, availableSizes: [8, 8.5, 9, 9.5, 10, 10.5, 11], imageUrl: "/ultraboost.jpg" },
    { id: 20, name: 'New Balance 992 "JJJJound"', brand: 'New Balance', color: 'Green', price: 600, availableSizes: [9, 9.5, 10], imageUrl: "/jjjjound.jpg" },
    { id: 21, name: 'Jordan 1 Low "Travis Scott Black Phantom"', brand: 'Jordan', color: 'Black', price: 1200, availableSizes: [8.5, 9, 9.5, 10, 10.5], imageUrl: "/ts1.jpg" },
    { id: 22, name: 'M.A+ Cow Leather Derby', brand: 'M.A+', color: 'Black', price: 1600, availableSizes: [10], imageUrl: "/ma+.jpg" },
    { id: 23, name: 'Adidas Yeezy Slide "Pure"', brand: 'Adidas', color: 'Grey', price: 150, availableSizes: [8, 9, 10, 11, 12], imageUrl: "/pureslides.jpg" },
    { id: 24, name: 'Nike Air Max 1 "Patta"', brand: 'Nike', color: 'Aqua', price: 250, availableSizes: [8.5, 9, 9.5, 10.5], imageUrl: "/patta.jpg" },
];

const SneakerResellPage = () => {
    const [view, setView] = useState('main');
    const [products] = useState(staticProducts);
    const [filteredProducts, setFilteredProducts] = useState(products);
    const [cart, setCart] = useState([]);
    const [selectedSizes, setSelectedSizes] = useState({});

    const [searchTerm, setSearchTerm] = useState('');
    const [suggestions, setSuggestions] = useState([]);
    const [showFilterDropdown, setShowFilterDropdown] = useState(false);
    const [tempFilters, setTempFilters] = useState({ brand: 'All', color: 'All', size: 'All' });
    const [activeFilters, setActiveFilters] = useState({ brand: 'All', color: 'All', size: 'All' });

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState('');
    const [feedback, setFeedback] = useState({ rating: null, text: '' });

    const uniqueBrands = useMemo(() => ['All', ...new Set(products.map(p => p.brand))], [products]);
    const uniqueColors = useMemo(() => ['All', ...new Set(products.map(p => p.color))], [products]);
    const uniqueSizes = useMemo(() => ['All', 7, 7.5, 8, 8.5, 9, 9.5, 10, 10.5, 11, 11.5, 12, 13], []);

    useEffect(() => {
        let tempProducts = [...products];

        if (searchTerm) {
            tempProducts = tempProducts.filter(p => p.name.toLowerCase().includes(searchTerm.toLowerCase()));
            setSuggestions(tempProducts.slice(0, 5).map(p => p.name));
        } else {
            setSuggestions([]);
        }

        if (activeFilters.brand !== 'All') {
            tempProducts = tempProducts.filter(p => p.brand === activeFilters.brand);
        }
        if (activeFilters.color !== 'All') {
            tempProducts = tempProducts.filter(p => p.color === activeFilters.color);
        }
        if (activeFilters.size !== 'All') {
            tempProducts = tempProducts.filter(p => p.availableSizes.includes(parseFloat(activeFilters.size)));
        }

        setFilteredProducts(tempProducts);
    }, [searchTerm, activeFilters, products]);

    const handleSizeSelect = (productId, size) => {
        setSelectedSizes(prev => ({ ...prev, [productId]: size }));
    };

    const handleAddToCart = (product) => {
        const selectedSize = selectedSizes[product.id];
        if (!selectedSize) {
            setToastMessage('Please select a size first.');
            setShowToast(true);
            setTimeout(() => setShowToast(false), 3000);
            return;
        }
        
        const cartItem = { ...product, selectedSize, cartId: Date.now() };
        setCart(prev => [...prev, cartItem]);
        
        setToastMessage(`${product.name} (Size ${selectedSize}) added to cart!`);
        setShowToast(true);
        setTimeout(() => setShowToast(false), 3000);
    };

    const handleRemoveFromCart = (cartId) => {
        setCart(prev => prev.filter(item => item.cartId !== cartId));
    };

    const handleApplyFilters = () => {
        setActiveFilters(tempFilters);
        setShowFilterDropdown(false);
    };

    const handleCheckoutSubmit = (e) => {
        e.preventDefault();
        setView('confirmation');
    };

    const handleFeedbackSubmit = () => {
        console.log('Feedback Submitted:', feedback);
        setFeedback({ rating: null, text: '' });
        setCart([]);
        setView('main');
        setActiveFilters({ brand: 'All', color: 'All', size: 'All' });
        setTempFilters({ brand: 'All', color: 'All', size: 'All' });
    };

    const cartTotal = useMemo(() => {
        return cart.reduce((total, item) => total + item.price, 0).toFixed(2);
    }, [cart]);

    const renderMainPage = () => (
        <>
            <div className="controls-bar">
                <div className="search-container">
                    <input
                        type="text"
                        className="search-bar"
                        placeholder="Search for products..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                    {suggestions.length > 0 && (
                        <ul className="search-suggestions">
                            {suggestions.map((suggestion, index) => (
                                <li key={index} onClick={() => setSearchTerm(suggestion)}>
                                    {suggestion}
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
                <div className="filter-container">
                    <button className="filter-toggle-btn" onClick={() => setShowFilterDropdown(!showFilterDropdown)}>
                        Filter {showFilterDropdown ? '▲' : '▼'}
                    </button>
                    {showFilterDropdown && (
                        <div className="filter-dropdown">
                            <div className="filter-group">
                                <label>Brand</label>
                                <select value={tempFilters.brand} onChange={(e) => setTempFilters({...tempFilters, brand: e.target.value})}>
                                    {uniqueBrands.map(b => <option key={b} value={b}>{b}</option>)}
                                </select>
                            </div>
                            <div className="filter-group">
                                <label>Color</label>
                                <select value={tempFilters.color} onChange={(e) => setTempFilters({...tempFilters, color: e.target.value})}>
                                    {uniqueColors.map(c => <option key={c} value={c}>{c}</option>)}
                                </select>
                            </div>
                            <div className="filter-group">
                                <label>Size</label>
                                <select value={tempFilters.size} onChange={(e) => setTempFilters({...tempFilters, size: e.target.value})}>
                                    {uniqueSizes.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                            </div>
                            <button className="apply-filters-btn" onClick={handleApplyFilters}>Apply</button>
                        </div>
                    )}
                </div>
            </div>

            <div className="product-grid">
                {filteredProducts.map(product => (
                    <div key={product.id} className="product-card">
                        <div className="product-image-placeholder">
                            <img 
                                src={product.imageUrl} 
                                alt={product.name} 
                                className="product-image" 
                            />
                        </div>
                        <h3 className="product-name">{product.name}</h3>
                        <p className="product-price">${product.price.toFixed(2)}</p>
                        <div className="size-selector">
                            {product.availableSizes.map(size => (
                                <div
                                    key={size}
                                    className={`size-box ${selectedSizes[product.id] === size ? 'selected' : ''}`}
                                    onClick={() => handleSizeSelect(product.id, size)}
                                >
                                    {size}
                                </div>
                            ))}
                        </div>
                        <button className="add-to-cart-btn" onClick={() => handleAddToCart(product)}>
                            Add to Cart
                        </button>
                    </div>
                ))}
            </div>
        </>
    );

    const renderCheckoutPage = () => (
        <div className="checkout-page">
            <div className="checkout-page-header">
                 <h2>Checkout</h2>
                 <button className="back-to-shop-btn" onClick={() => setView('main')}>&larr; Continue Shopping</button>
            </div>
            <div className="checkout-layout">
                <div className="checkout-form-container">
                    <h3>Shipping Information</h3>
                    <form id="checkout-form" onSubmit={handleCheckoutSubmit}>
                        <div className="form-group">
                            <label htmlFor="name">Full Name</label>
                            <input type="text" id="name" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email Address</label>
                            <input type="email" id="email" required />
                        </div>
                        <div className="form-group">
                            <label htmlFor="address">Street Address</label>
                            <input type="text" id="address" required />
                        </div>
                        <div className="form-group-row">
                            <div className="form-group">
                                <label htmlFor="city">City</label>
                                <input type="text" id="city" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="zip">ZIP Code</label>
                                <input type="text" id="zip" required />
                            </div>
                        </div>
                        <h3>Payment Details (Concept)</h3>
                        <div className="form-group">
                            <label htmlFor="card-number">Card Number</label>
                            <input type="text" id="card-number" placeholder="**** **** **** ****" required />
                        </div>
                         <div className="form-group-row">
                            <div className="form-group">
                                <label htmlFor="expiry">Expiry (MM/YY)</label>
                                <input type="text" id="expiry" placeholder="MM/YY" required />
                            </div>
                            <div className="form-group">
                                <label htmlFor="cvc">CVC</label>
                                <input type="text" id="cvc" placeholder="123" required />
                            </div>
                        </div>
                    </form>
                </div>
                <div className="cart-summary-container">
                    <h3>Your Cart</h3>
                    {cart.length === 0 ? (
                        <p>Your cart is empty.</p>
                    ) : (
                        <>
                            <div className="cart-items-list">
                                {cart.map(item => (
                                    <div key={item.cartId} className="cart-item">
                                        <div className="cart-item-info">
                                            <p className="cart-item-name">{item.name} (Size: {item.selectedSize})</p>
                                            <p className="cart-item-price">${item.price.toFixed(2)}</p>
                                        </div>
                                        <button className="remove-item-btn" onClick={() => handleRemoveFromCart(item.cartId)}>Remove</button>
                                    </div>
                                ))}
                            </div>
                            <div className="cart-total">
                                <strong>Total:</strong>
                                <strong>${cartTotal}</strong>
                            </div>
                            <button type="submit" form="checkout-form" className="submit-order-btn">
                                Place Order
                            </button>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
    
    const renderConfirmationPage = () => (
        <div className="confirmation-modal-overlay">
            <div className="confirmation-modal-content">
                <h2>Thank You For Your Purchase!</h2>
                <p>Your order has been confirmed. A receipt has been sent to your email.</p>
                <div className="feedback-section">
                    <h4>How was your experience?</h4>
                    <div className="feedback-rating">
                        <button 
                            className={`feedback-btn ${feedback.rating === 'bad' ? 'selected' : ''}`}
                            onClick={() => setFeedback({...feedback, rating: 'bad'})}>
                            Bad
                        </button>
                        <button 
                            className={`feedback-btn ${feedback.rating === 'mediocre' ? 'selected' : ''}`}
                            onClick={() => setFeedback({...feedback, rating: 'mediocre'})}>
                            Mediocre
                        </button>
                        <button 
                            className={`feedback-btn ${feedback.rating === 'good' ? 'selected' : ''}`}
                            onClick={() => setFeedback({...feedback, rating: 'good'})}>
                            Good
                        </button>
                    </div>
                    <textarea 
                        className="feedback-textarea"
                        placeholder="Tell us more about your experience (optional)..."
                        value={feedback.text}
                        onChange={(e) => setFeedback({...feedback, text: e.target.value})}
                    ></textarea>
                    <button className="submit-feedback-btn" onClick={handleFeedbackSubmit}>Submit Feedback & Return to Shop</button>
                </div>
            </div>
        </div>
    );

    return (
        <div className="sneakerresell-background">
            <div className="sneaker-resell-container">
                <header className="site-header">
                    <h1>SneakerRetrieve</h1>
                    <button className="checkout-nav-btn" onClick={() => cart.length > 0 && setView('checkout')}>
                        Checkout ({cart.length})
                    </button>
                </header>

                <main>
                    {view === 'main' && renderMainPage()}
                    {view === 'checkout' && renderCheckoutPage()}
                </main>
                
                {view === 'confirmation' && renderConfirmationPage()}

                {showToast && (
                    <div className="toast-notification">
                        {toastMessage}
                    </div>
                )}
            </div>
        </div>
    );
};

export default SneakerResellPage;

