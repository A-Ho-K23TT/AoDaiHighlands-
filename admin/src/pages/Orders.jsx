import React, { useEffect, useState } from "react";
import axios from "axios";
import { backendUrl, formatCurrency } from "../App";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import { useContext } from "react";
import { AdminLanguageContext } from "../context/AdminLanguageContext";

const Orders = ({ token }) => {
  const [orders, setorders] = useState([]);
  const { t } = useContext(AdminLanguageContext);

  const fetchAllOrders = async () => {
    if (!token) {
      return null;
    }
    try {
      const response = await axios.post(
        backendUrl + "/api/order/list",
        {},
        { headers: { token } },
      );
      if (response.data.success) {
        setorders(response.data.orders.reverse());
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  const statusHandler = async (event, orderId) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/order/status",
        { orderId, status: event.target.value },
        { headers: { token } },
      );
      if (response.data.success) {
        await fetchAllOrders();
      }
    } catch (error) {
      console.log(error);
      toast.error(response.data.message);
    }
  };

  useEffect(() => {
    fetchAllOrders();
  }, [token]);

  return (
    <div>
      <h3>{t('orders.title')}</h3>
      <div>
        {orders.map((order, index) => (
          <div
            className="grid grid-cols-1 sm:grid-cols-[0.5fr_2fr_1fr] lg:grid-cols-[0.5fr_2fr_1fr_1fr_1fr] gap-3 items-start border-2 border-gray-200 p-5 md:p-8 my-3 md:my-4 text-xs sm:text-sm text-gray-700"
            key={index}
          >
            <img className="w-12" src={assets.parcel_icon} alt="" />

            <div>
              <div>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} X {item.quantity}{" "}
                        <span>{item.size}</span>{" "}
                      </p>
                    );
                  } else {
                    return (
                      <p className="py-0.5" key={index}>
                        {item.name} X {item.quantity} <span>{item.size}</span> ,
                      </p>
                    );
                  }
                })}
              </div>
              <p className="mt-3 mb-2 font-medium">
                {order.address.firstName + " " + order.address.lastName}
              </p>
              <div>
                <p>{order.address.street + ","}</p>
                <p>
                  {order.address.city +
                    ", " +
                    order.address.state +
                    ", " +
                    order.address.country +
                    ", " +
                    order.address.zipcode}
                </p>
              </div>
              <p>{order.address.phone}</p>
            </div>
            <div>
              <p className="text-sm sm:text-[15px]">
                {t('orders.items')} : {order.items.length}
              </p>
              <p className="mt-3">{t('orders.method')}: {order.paymentMethod}</p>
              <p>{t('orders.payment')}: {order.payment ? t('orders.done') : t('orders.pending')}</p>
              <p>{t('orders.date')}: {new Date(order.date).toLocaleDateString()}</p>
            </div>
            <p className="text-sm sm:text-[15px]">
              {formatCurrency(order.amount)}
            </p>
            <select
              onChange={(event) => statusHandler(event, order._id)}
              value={order.status}
              className="p-2 font-semibold"
            >
              <option value="Order Placed">{t('orders.statusOptions.orderPlaced')}</option>
              <option value="Packing">{t('orders.statusOptions.packing')}</option>
              <option value="Shipped">{t('orders.statusOptions.shipped')}</option>
              <option value="Out for delivery">{t('orders.statusOptions.outForDelivery')}</option>
              <option value="Delivered">{t('orders.statusOptions.delivered')}</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
