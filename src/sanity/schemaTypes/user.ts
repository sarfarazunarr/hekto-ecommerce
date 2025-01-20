import { defineField, Rule } from "sanity";

const user = defineField({
    name: 'user',
    type: 'document',
    title: 'User',
    fields: [
        {
            name: 'first_name',
            type: 'string',
            title: 'First Name',
            validation: (Rule: Rule) => Rule.required().error('Name is required'),
        },
        {
            name: 'last_name',
            type: 'string',
            title: 'Lst Name',
        },
        {
            name: 'email',
            type: 'string',
            title: 'Email',
            validation: (Rule: Rule) => Rule.email(),
        },
        {
            name: 'mobileNumber',
            type: 'string',
            title: 'Mobile Number'
        },
        {
            name: 'address',
            type: 'object',
            title: 'Address',
            fields: [
                { name: 'address1', type: 'string', title: 'Address' },
                { name: 'address2', type: 'string', title: 'Address 2' },
                { name: 'city', type: 'string', title: 'City' },
                { name: 'postal_code', type: 'string', title: 'Post Code' },
                { name: 'country', type: 'string', title: 'Country' }
            ]
        },
        {
            name: 'password',
            type: 'string',
            title: 'Password',
        },
        {
            title: "Registratin Date",
            name: 'registration_date',
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
export default user;