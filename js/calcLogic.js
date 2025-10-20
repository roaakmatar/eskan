const propertyPrice = document.getElementById('propertyPrice');
        const downPayment = document.getElementById('downPayment');
        const financingPeriod = document.getElementById('financingPeriod');
        const profitRate = document.getElementById('profitRate');

        function updateCalculator() {
            const price = parseInt(propertyPrice.value);
            const downPct = parseInt(downPayment.value);
            const years = parseInt(financingPeriod.value);
            const rate = parseFloat(profitRate.value);

            // Update displays
            document.getElementById('priceDisplay').textContent = price.toLocaleString() + ' ريال';
            document.getElementById('downPaymentDisplay').textContent = downPct + '%';
            document.getElementById('periodDisplay').textContent = years + ' سنة';
            document.getElementById('rateDisplay').textContent = rate + '%';

            // Calculate financing
            const downPaymentAmount = price * (downPct / 100);
            const financingAmt = price - downPaymentAmount;
            const mutliplier = ((rate * years) / 100) + 1;
            const numberOfPayments = years * 12;
            
            const monthlyPmt = (financingAmt / numberOfPayments) * mutliplier;
            
            const totalAmt = monthlyPmt * numberOfPayments;
            const totalPft = totalAmt - financingAmt;

            // Update results
            document.getElementById('monthlyPayment').textContent = Math.round(monthlyPmt).toLocaleString() + ' ريال';
            document.getElementById('financingAmount').textContent = Math.round(financingAmt).toLocaleString();
            document.getElementById('totalAmount').textContent = Math.round(totalAmt).toLocaleString();
            document.getElementById('totalProfit').textContent = Math.round(totalPft).toLocaleString();

            // Update slider backgrounds
            updateSliderBackground(propertyPrice);
            updateSliderBackground(downPayment);
            updateSliderBackground(financingPeriod);
            updateSliderBackground(profitRate);
        }

        function updateSliderBackground(slider) {
            const value = (slider.value - slider.min) / (slider.max - slider.min) * 100;
            // slider.style.background = `background: linear-gradient(90deg, rgba(42, 123, 155, 1) 0%, rgba(87, 199, 133, 1) 50%, rgba(237, 221, 83, 1) 100%);)`;
        }

        propertyPrice.addEventListener('input', updateCalculator);
        downPayment.addEventListener('input', updateCalculator);
        financingPeriod.addEventListener('input', updateCalculator);
        profitRate.addEventListener('input', updateCalculator);

        // Initialize calculator
        updateCalculator();
        