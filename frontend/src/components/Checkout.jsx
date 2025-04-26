import React, { useState } from 'react';

const Checkout = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
    cardNumber: '',
    cardName: '',
    expiryDate: '',
    cvv: '',
  });

  const [activeStep, setActiveStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Process payment logic here
    setActiveStep(3);
  };

  const nextStep = () => setActiveStep(prev => prev + 1);
  const prevStep = () => setActiveStep(prev => prev - 1);

  return (
    <div className="checkout-container">
      <div className="checkout-header">
        <h1>Complete Your Purchase</h1>
        <div className="progress-steps">
          <div className={`step ${activeStep >= 1 ? 'active' : ''}`}>
            <span>1</span>
            <p>Shipping</p>
          </div>
          <div className={`step ${activeStep >= 2 ? 'active' : ''}`}>
            <span>2</span>
            <p>Payment</p>
          </div>
          <div className={`step ${activeStep >= 3 ? 'active' : ''}`}>
            <span>3</span>
            <p>Confirmation</p>
          </div>
        </div>
      </div>

      <div className="checkout-body">
        {activeStep === 1 && (
          <div className="shipping-form">
            <h2>Shipping Information</h2>
            <form>
              <div className="form-group">
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
                <div className="input-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="address">Address</label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="city">City</label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="zipCode">ZIP Code</label>
                    <input
                      type="text"
                      id="zipCode"
                      name="zipCode"
                      value={formData.zipCode}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-actions">
                <button type="button" className="btn-next" onClick={nextStep}>
                  Continue to Payment
                </button>
              </div>
            </form>
          </div>
        )}

        {activeStep === 2 && (
          <div className="payment-form">
            <h2>Payment Details</h2>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <div className="input-group">
                  <label htmlFor="cardNumber">Card Number</label>
                  <input
                    type="text"
                    id="cardNumber"
                    name="cardNumber"
                    value={formData.cardNumber}
                    onChange={handleChange}
                    placeholder=""
                    required
                  />
                </div>
                <div className="input-group">
                  <label htmlFor="cardName">Name on Card</label>
                  <input
                    type="text"
                    id="cardName"
                    name="cardName"
                    value={formData.cardName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="form-row">
                  <div className="input-group">
                    <label htmlFor="expiryDate">Expiry Date</label>
                    <input
                      type="text"
                      id="expiryDate"
                      name="expiryDate"
                      value={formData.expiryDate}
                      onChange={handleChange}
                      placeholder="MM/YY"
                      required
                    />
                  </div>
                  <div className="input-group">
                    <label htmlFor="cvv">CVV</label>
                    <input
                      type="text"
                      id="cvv"
                      name="cvv"
                      value={formData.cvv}
                      onChange={handleChange}
                      placeholder=""
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="form-actions">
                <button type="button" className="btn-back" onClick={prevStep}>
                  Back
                </button>
                <button type="submit" className="btn-submit">
                  Complete Purchase
                </button>
              </div>
            </form>
          </div>
        )}

        {activeStep === 3 && (
          <div className="confirmation">
            <div className="confirmation-icon">
              <svg viewBox="0 0 24 24">
                <path fill="currentColor" d="M12,2A10,10 0 0,1 22,12A10,10 0 0,1 12,22A10,10 0 0,1 2,12A10,10 0 0,1 12,2M11,16.5L18,9.5L16.59,8.09L11,13.67L7.91,10.59L6.5,12L11,16.5Z" />
              </svg>
            </div>
            <h2>Order Confirmed!</h2>
            <p>Thank you for your purchase. Your order has been received and is being processed.</p>
            <p>A confirmation email has been sent to <strong>{formData.email}</strong>.</p>
            <button className="btn-continue">Continue Shopping</button>
          </div>
        )}
      </div>

      <div className="order-summary">
        <h3>Order Summary</h3>
        <div className="summary-item">
          <span>Subtotal</span>
          <span></span>
        </div>
        <div className="summary-item">
          <span>Shipping</span>
          <span>Free</span>
        </div>
     
        <div className="summary-total">
          <span>Total</span>
          <span></span>
        </div>
      </div>
    </div>
  );
};

export default Checkout;