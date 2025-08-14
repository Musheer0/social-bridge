"use client";

import { GetUserInstagram } from "@/actions/user/accounts/instagram";
import { useInstagram } from "@/stores/use-instagram";
import { useUser } from "@/stores/use-user";
import { useQuery } from "@tanstack/react-query";
import { toast } from "sonner";
import React, { PropsWithChildren, useEffect } from "react";
import IGAUTHLoader from "../loaders/instagram-auth-loader";

const InitializeInstagram = ({ children }: PropsWithChildren) => {
  const { setIsLoading, setIG } = useInstagram();
  const { setUser } = useUser();

  const query = useQuery({
    queryKey: ["instagramAccount"],
    queryFn: async () => {
      toast.loading("Connecting to Instagram...", { id: "insta-loading" });
      setIsLoading(true);

      const ig = await GetUserInstagram();
      console.log(ig)
      toast.dismiss("insta-loading");

      if (!ig) {
        toast.error("Error fetching your details");
      } else {
        
       if(ig.ig_id){
          toast.success("Connected");

        setIG({
          id: ig.id,
          ig_id: ig.ig_id,
          createdAt: ig.createdAt,
          expiresAt: ig.expiresAt,
        });
       }
       else{
                toast.error("automations wont work untill you link your ig account");

       }
        setUser(ig.user);
      }

      setIsLoading(false);
      return ig;
    },
    refetchOnWindowFocus: false, // no unnecessary spam calls
  });



if(query.data)
  return <>{children}</>;
else
  return <IGAUTHLoader/>
};

export default InitializeInstagram;
