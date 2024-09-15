const TaskCard = () => {
  return (
    <div className="flex flex-col md:flex-row gap-6 py-[23px]">
      {/* Left Card */}
      <div className="relative md:p-[30px] p-[16px] rounded-2xl shadow-lg md:w-auto w-full flex-1 overflow-hidden">
        {/* Background Image */}
        <img
          className="absolute inset-0 w-full h-full object-cover z-[1]"
          src="/assets/task-bg.png"
          alt="background"
        />

        {/* Responsive Table Wrapper */}
        <div className="overflow-x-auto relative z-[3]">
          <table className="min-w-full text-left">
            <thead>
              <tr className="border-y-[1.5px] border-y-[#E0E0E0]">
                <th className="py-[8.5px] px-2 md:px-4 font-[#828282] font-[400] font-poppins text-[13px] leading-[19.5px]">
                  Task Title
                </th>
                <th className="py-[8.5px] px-2 md:px-4 font-[#828282] font-[400] font-poppins text-[13px] leading-[19.5px]">
                  Task Description
                </th>
                <th className="py-[8.5px] px-2 md:px-4 font-[#828282] font-[400] font-poppins text-[13px] leading-[19.5px]">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="font-[600] text-[#4F4F6F] font-poppins text-[12px] md:text-[13px] leading-[19.5px] py-[10px] md:py-[15px] px-2 md:px-4">
                  Home Page Redesign
                </td>
                <td className="text-[#4F4F4F] text-[11px] md:text-[12px] leading-[18px] font-[300] px-2 md:px-4 py-[10px] md:py-[15px]">
                  Lorem ipsum dollars
                </td>
                <td className="text-[#219653] text-[11px] md:text-[12px] leading-[16.5px] font-[400] px-2 md:px-4 py-[10px] md:py-[15px]">
                  <span className="flex items-center gap-[6.8px] w-max">
                    <span className="w-2 h-2 flex rounded-full bg-[#219653]"></span>
                    In Progress
                  </span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Right Card */}
      <div className="md:p-[35px] p-[26px] rounded-2xl shadow-lg w-full md:w-1/3 relative overflow-hidden">
        <img
          className="absolute h-[120%] w-full object-cover top-[-20px] left-0 z-[1]"
          src="/assets/person-bg.png"
        />
        <h3 className="relative z-[2] text-[13px] leading-[19.5px] font-poppins text-[#828282] font-[400] md:pb-[25px] pb-[20px]">
          Persons
        </h3>
        <ul className="relative z-[2] flex flex-col gap-4">
          <li className="text-[#12122180] font-[700] font-playfair text-[18px] leading-[23.99px]">
            Cüneyt
          </li>
          <li className="text-[#12122180] font-[700] font-playfair text-[18px] leading-[23.99px]">
            Bayram
          </li>
          <li className="text-[#12122180] font-[700] font-playfair text-[18px] leading-[23.99px]">
            Ali
          </li>
          <li className="text-[#12122180] font-[700] font-playfair text-[18px] leading-[23.99px]">
            Gökhan
          </li>
          <li className="text-[#12122180] font-[700] font-playfair text-[18px] leading-[23.99px]">
            Yahya
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TaskCard;
