
export const createUser = async (data: any) => {
    try {
      const res = await fetch("https://donation-server-three.vercel.app/api/auth/create-account", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
        cache: "no-cache",
      });
  
      if (!res.ok) {
        console.error(`Error creating user. Status: ${res.status}. Response: ${await res.text()}`);
        throw new Error(`Error creating user. Status: ${res.status}`);
      }
  
      const userInfo = await res.json();
      console.log(userInfo);
      return userInfo;
    } catch (error) {
      throw error;
    }
  };
  