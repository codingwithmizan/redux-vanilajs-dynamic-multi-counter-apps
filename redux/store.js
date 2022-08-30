
const store = Redux.createStore(counterReducer);
const render = () => {
  createCounter();
  updateCount();
};

const createCounter = () => {
  const counterList = document.getElementById("counterList");
  const counterCount = counterList?.childElementCount;
  const state = store.getState();
  const counterItem = state.find((item) => item?.id === counterCount + 1);

  if (state?.length > counterCount && counterItem) {
    let div = document.createElement("div");
    div.innerHTML = `
        <div class="h-60 bg-sky-200 my-6 rounded flex justify-center items-center shadow">
        <div>
          <h4 class="text-center text-4xl font-medium text-purple-600" id="count-${counterItem.id}">${counterItem.value}</h4>
          <div class="mt-10">
          <input type='number' id="input-${counterItem.id}" value="${counterItem.id}" class="w-28 py-1.5 text-center text-3xl rounded"/>
            <button
            type="button"
              class="text-2xl bg-green-600 text-white py-2 px-3 rounded mx-4"
              onClick = "incrementCounter(${counterItem.id})"
            >
              Increment
            </button>
            <button
            type="button"
              class="text-2xl bg-orange-600 text-white py-2 px-3 rounded"
              onClick = "decrementCounter(${counterItem.id})"
            >
              Decrement
            </button>
          </div>
        </div>
      </div>`;

    counterList.appendChild(div);
  }
};

const updateCount = () => {
  const state = store.getState();
  state.map((item) => {
    const count = document.getElementById(`count-${item.id}`);
    count.innerHTML = item?.value;
  });
};
store.subscribe(render);
