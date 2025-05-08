import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { clearCart } from '../features/product/productSlice';

const Checkout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    city: '',
    zipCode: '',
  });

  const [activeStep, setActiveStep] = useState(1);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleShippingSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        access_key: 'c612db70-ed0f-4703-b417-61aac622f0c1',
        subject: 'New Checkout Submission',
        from_name: 'Website Checkout',
        ...formData,
      }),
    });

    const result = await response.json();
    if (result.success) {
      setActiveStep(2); // Proceed to payment step
    } else {
      alert('Form submission failed. Please try again.');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setActiveStep(3); // Show confirmation
  };

  const clearCartItem = () => {
    dispatch(clearCart());
    navigate('/');
  };

  const prevStep = () => setActiveStep((prev) => prev - 1);

  return (
    <div style={{ maxWidth: '800px', margin: '2rem auto', padding: '1rem' }}>
      <h1 style={{ textAlign: 'center' }}>Checkout</h1>

      {/* Step Indicator */}
      <div style={{ display: 'flex', justifyContent: 'space-around', marginBottom: '2rem' }}>
        <div style={{ fontWeight: activeStep === 1 ? 'bold' : 'normal' }}>1. Shipping</div>
        <div style={{ fontWeight: activeStep === 2 ? 'bold' : 'normal' }}>2. Payment</div>
        <div style={{ fontWeight: activeStep === 3 ? 'bold' : 'normal' }}>3. Confirmation</div>
      </div>

      {/* Step 1: Shipping */}
      {activeStep === 1 && (
        <form onSubmit={handleShippingSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label>First Name</label>
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Last Name</label>
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>City</label>
            <input
              type="text"
              name="city"
              value={formData.city}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>

          <div style={{ marginBottom: '1rem' }}>
            <label>Zip Code</label>
            <input
              type="text"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              required
              style={{ width: '100%', padding: '0.5rem' }}
            />
          </div>

          <button type="submit" style={{ padding: '0.75rem 1.5rem', backgroundColor: '#3498db', color: '#fff' }}>
            Continue to Payment
          </button>
        </form>
      )}

      {/* Step 2: Fake Payment Info */}
      {activeStep === 2 && (
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '1rem' }}>
            <label>Card Number</label>
            <input type="text" name="cardNumber" required style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <div style={{ marginBottom: '1rem' }}>
            <label>Cardholder Name</label>
            <input type="text" name="cardName" required style={{ width: '100%', padding: '0.5rem' }} />
          </div>
          <div style={{ display: 'flex', gap: '1rem' }}>
            <div>
              <label>Expiry</label>
              <input type="text" name="expiry" required placeholder="MM/YY" style={{ padding: '0.5rem' }} />
            </div>
            <div>
              <label>CVV</label>
              <input type="text" name="cvv" required style={{ padding: '0.5rem' }} />
            </div>
          </div>
          <div style={{ marginTop: '1.5rem' }}>
            <button type="button" onClick={prevStep} style={{ marginRight: '1rem' }}>
              Back
            </button>
            <button
              type="submit"
              style={{ backgroundColor: '#27ae60', color: 'white', padding: '0.75rem 1.5rem' }}
            >
              Complete Order
            </button>
          </div>
        </form>
      )}

      {/* Step 3: Confirmation */}
      {activeStep === 3 && (
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <h2>🎉 Thank you, {formData.firstName}!</h2>
          <p>Your order has been placed and a confirmation email sent to <strong>{formData.email}</strong>.</p>
          <button
            onClick={clearCartItem}
            style={{ marginTop: '2rem', padding: '0.75rem 1.5rem', backgroundColor: '#3498db', color: '#fff' }}
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};

export default Checkout;
