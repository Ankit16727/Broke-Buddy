import { useState } from 'react';

export default function SetBudget() {
  const [category, setCategory] = useState("food"); // Default category
  const [budget, setBudget] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [warning, setWarning] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();

    // Validate form fields
    if (!budget || !startDate || !endDate) {
      setWarning("All fields are required.");
      return;
    }

    // Clear any previous warnings
    setWarning("");

    // Submit the form data
    console.log({ category, budget, startDate, endDate });
    alert("Budget has been set successfully!");
  }

  return (
    <div className="flex justify-center mt-28 mb-20 font-inter">
      <div className="border border-[#BEBFBF] w-80 md:w-96">
        <div className="p-10">
          <form onSubmit={handleSubmit}>
            <div className="mb-10">
              <p className="font-jockeyOne text-3xl text-center">Set Budget</p>
            </div>

            {warning && <p className="text-red-500 text-sm mb-3">{warning}</p>}

            <div className="mb-3">
              <label htmlFor="category" className="block text-sm font-medium mb-1">
                Select Category
              </label>
              <select
                id="category"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="border rounded-md border-[#BEBFBF] p-2 w-full text-xs md:text-sm"
              >
                <option value="food">Food</option>
                <option value="travel">Travel</option>
                <option value="groceries">Groceries</option>
                <option value="others">Others</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="budget" className="block text-sm font-medium mb-1">
                Enter Budget
              </label>
              <input
                id="budget"
                type="number"
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="border rounded-md border-[#BEBFBF] p-2 w-full text-xs md:text-sm"
                placeholder="Enter your budget"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="start-date" className="block text-sm font-medium mb-1">
                Start Date
              </label>
              <input
                id="start-date"
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="border rounded-md border-[#BEBFBF] p-2 w-full text-xs md:text-sm"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="end-date" className="block text-sm font-medium mb-1">
                End Date
              </label>
              <input
                id="end-date"
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="border rounded-md border-[#BEBFBF] p-2 w-full text-xs md:text-sm"
              />
            </div>

            <div className="flex justify-center mb-6">
              <button
                type="submit"
                className="bg-black text-white rounded-md md:text-lg px-4 py-0.5"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
