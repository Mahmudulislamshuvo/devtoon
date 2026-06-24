import React from "react";

const UserDetails = () => {
  return (
    <div className="min-w-0">
      {/* যেহেতু আপনার ডেটাতে এখন ইউজারের নাম নেই, তাই আমি হার্ডকোডেড রেখেছি। 
                  পরে User কালেকশন থেকে পপুলেট (populate) করে এখানে বসাতে পারবেন। */}
      <p className="font-body-md text-[14px] text-on-surface font-semibold truncate">
        Alex Rivera
      </p>
      <p className="font-label-sm text-[11px] text-on-surface-variant truncate">
        @arivera_dev
      </p>
    </div>
  );
};

export default UserDetails;
