export async function sendOrderInfo(cart, data) {
  let orders = {
    order: {
      items: cart,
      customer: data,
    },
  };

  try {
    let response = await fetch("http://localhost:3000/orders", {
      method: "POST",
      body: JSON.stringify(orders),
      headers: {
        "Content-Type": "application/json",
      },
    });

    let data = await response.json();

    if (!response.ok) {
      throw new Error("Sending info failed");
    }

    localStorage.clear();
    return { success: true, message: data.message };
  } catch (error) {
    return { success: false, error };
  }
}
