export const checkIfIPInJapan = async (ip) => {
  try {
    // Gửi yêu cầu đến API của ipstack
    const response = await axios.get(
      `http://api.ipstack.com/${ip}?access_key=${ipstackApiKey}`
    );

    // Kiểm tra xem quốc gia của địa chỉ IP có phải là Nhật Bản không
    if (response.data.country_code === "JP") {
      return true; // Địa chỉ IP thuộc Nhật Bản
    }
  } catch (error) {
    console.error("Error checking IP:", error);
  }

  return false; // Mặc định là không phải Nhật Bản hoặc có lỗi xảy ra
};
