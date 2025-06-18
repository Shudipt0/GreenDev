import { Skeleton } from "@/components/ui/skeleton";

const SignUpLoading = () => {
  return (
    <div className=" w-full  flex flex-col items-center justify-center ">
      <div className="w-full lg:w-[768px] flex flex-col justify-center items-center text-start space-y-6 lg:space-y-8 bg-white rounded-lg">
        <Skeleton className=" w-[70px] h-6 " />
        <Skeleton className="w-full h-[18px] " />
        <Skeleton className="w-full h-[30px] mt-3 " />
        <Skeleton className="w-full h-[30px] " />
        <Skeleton className="w-full h-[30px] " />
        <Skeleton className="w-full h-[30px] " />
        <Skeleton className="w-full h-[30px] " />
        <Skeleton className="w-full h-[18px] mt-2 " />
      </div>
    </div>
  );
};

export default SignUpLoading;
