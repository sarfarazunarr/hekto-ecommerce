import { defineField } from "sanity";

const order = defineField({
  name: 'order',
  type: 'document',
  title: 'Order',
  fields: [
    {
      name: 'products',
      type: 'array',
      title: 'Products',
      of: [{type: "object", fields: [
        {type: "reference", name: "product", to: [{type: "product"}]},
        {type: "number", name: "quantity", title: "quantity"},
        {type: "number", name: "amount", title: "amount"}
      ]}]
    },
    {
      name: 'customer',
      type: 'reference',
      title: 'Customer',
      to: [{type: "user"}]
    },
    {
      name: 'totalAmount',
      type: 'number',
      title: 'Total Amount'
    },
    {
      name: 'payment_method',
      type: 'string',
      title: 'Payment Method'
    },
    {
      name: 'shippingId',
      type: 'string',
      title: 'ShippingId',
    },
    {
      name: 'status',
      type: 'string',
      options: [
        "Pending", "Processing", "On Delivery", "Completed"
      ],
    },
    {
        title: "Order Date",
        name: 'order_date',
        type: 'datetime',
        options: {
            dateFormat: 'YYYY-MM-DD',
            timeFormat: 'HH:mm',
            timeStep: 15,
            calendarTodayLabel: 'Today'
        }
    },
  ],
});
export default order;