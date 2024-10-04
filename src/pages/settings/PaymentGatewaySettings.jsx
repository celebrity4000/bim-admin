import React, { useState } from 'react';
// import { CreditCard, Paypal } from 'lucide-react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../../components/ui/card';
import { RadioGroup, RadioGroupItem } from '../../components/ui/radio-group';
import { Label } from '../../components/ui/label';

const PaymentGateways = ({ amount = 100 }) => {
  const [paymentMethod, setPaymentMethod] = useState('creditCard');
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handlePayment = () => {
    // In a real application, you would integrate with Stripe or PayPal SDK here
    console.log('Processing payment...');
    console.log('Payment method:', paymentMethod);
    if (paymentMethod === 'creditCard') {
      console.log('Card details:', { cardNumber, expiryDate, cvv });
    }
    // Add actual payment processing logic here
  };

  return (
    <Card className="w-full max-w-md mx-auto bg-white mt-20">
      <CardHeader>
        <CardTitle>Payment Gateway</CardTitle>
        <CardDescription>Choose your payment method</CardDescription>
      </CardHeader>
      <CardContent>
        <RadioGroup
          value={paymentMethod}
          onValueChange={setPaymentMethod}
          className="flex flex-col space-y-4"
        >
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="creditCard" id="creditCard" />
            <Label htmlFor="creditCard" className="flex items-center">
              {/* <CreditCard className="mr-2 h-4 w-4" /> */}
              Credit Card
            </Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="paypal" id="paypal" />
            <Label htmlFor="paypal" className="flex items-center">
              {/* <Paypal className="mr-2 h-4 w-4" /> */}
              PayPal
            </Label>
          </div>
        </RadioGroup>

        {paymentMethod === 'creditCard' && (
          <div className="mt-4 space-y-4">
            <div className="space-y-2">
              <Label htmlFor="cardNumber">Card Number</Label>
              <Input
                id="cardNumber"
                placeholder="1234 5678 9012 3456"
                value={cardNumber}
                onChange={(e) => setCardNumber(e.target.value)}
              />
            </div>
            <div className="flex space-x-4">
              <div className="space-y-2 flex-1">
                <Label htmlFor="expiryDate">Expiry Date</Label>
                <Input
                  id="expiryDate"
                  placeholder="MM/YY"
                  value={expiryDate}
                  onChange={(e) => setExpiryDate(e.target.value)}
                />
              </div>
              <div className="space-y-2 flex-1">
                <Label htmlFor="cvv">CVV</Label>
                <Input
                  id="cvv"
                  placeholder="123"
                  value={cvv}
                  onChange={(e) => setCvv(e.target.value)}
                />
              </div>
            </div>
          </div>
        )}

        {paymentMethod === 'paypal' && (
          <div className="mt-4">
            <p>You will be redirected to PayPal to complete your payment.</p>
          </div>
        )}
      </CardContent>
      <CardFooter>
        <Button onClick={handlePayment} className="w-full bg-pink text-white">
          Pay ${amount}
        </Button>
      </CardFooter>
    </Card>
  );
};

export default PaymentGateways;