export const createDonation = async (data: any) => {
    try {
      const res = await fetch("https://donation-server-three.vercel.app/api/post/create-donation", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-cache",
      });
  
      if (!res.ok) {
        const errorText = await res.text();
        console.error(`Error creating donation. Status: ${res.status}. Response: ${errorText}`);
        throw new Error(`Error creating donation. Status: ${res.status}. Response: ${errorText}`);
      }
  
      const userInfo = await res.json();
      console.log(userInfo);
      return userInfo;
    } catch (error) {
      throw error;
    }
  };
  