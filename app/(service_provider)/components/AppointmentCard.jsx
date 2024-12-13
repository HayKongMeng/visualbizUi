
`use client`

const AppointmentCard = ({ customer, service, date}) => {
  
 
  return (
    <tr>
      <td>{customer}</td>
      <td>{service}</td>
      <td className="text-center">{date}</td>
      <td className="text-right">
        <div className="flex gap-2.5">
          <button className={`bg-slate-700 text-white text-sm font-medium rounded-md px-6 py-2.5`}>
            Accept
          </button>
          <button className="bg-red-500 text-white text-sm font-medium rounded-md px-6 py-2.5">
            Deny
          </button>
        </div>
      </td>
    </tr>
  );
};

export default AppointmentCard;
