function doPost(e) {
  // 檢查請求類型是否為 POST
  // if (e.parameter.method !== "POST") {
  //   return ContentService.createTextOutput("Error: Only POST method is allowed").setMimeType(ContentService.MimeType.TEXT);
  // }

  // 處理 POST 請求中的資料
  var username = e.parameter.username;
  var password = e.parameter.password;

  // 檢查用戶名和密碼
  if (username === 'admin' && password === 'password') {
    // 登入成功，返回成功訊息
    return ContentService.createTextOutput("Login successful!")//.setMimeType(ContentService.MimeType.TEXT);
  } else {
    // 登入失敗，返回錯誤訊息
    return ContentService.createTextOutput("Invalid credentials. Please check your username and password.")//.setMimeType(ContentService.MimeType.TEXT);
  }
}
