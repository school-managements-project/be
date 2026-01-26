export const getTemplateWelcome = () => {
    return `<table width="100%" cellpadding="0" cellspacing="0" style="margin:0;padding:0;background-color:#0f172a;font-family:Arial,Helvetica,sans-serif;">
  <tr>
    <td align="center" style="padding:30px 10px;">
      <!-- Container -->
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#020617;border-radius:8px;overflow:hidden;">
    <tr>
      <td align="center" style="background-color:#020617;padding:24px;">
        <h1 style="margin:0;color:#38bdf8;font-size:26px;line-height:1.3;">
          Welcome to CodeFarm 🚀
        </h1>
        <p style="margin:8px 0 0;color:#94a3b8;font-size:14px;">
          Grow your coding skills with us
        </p>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:24px;color:#e5e7eb;font-size:15px;line-height:1.6;">
        <p style="margin:0 0 16px;">
          Xin chào <strong>bạn</strong>,
        </p>

        <p style="margin:0 0 16px;">
          Chúng tôi rất vui khi bạn chính thức trở thành một thành viên của 
          <strong style="color:#38bdf8;">CodeFarm</strong>.
          Đây là nơi bạn học code một cách bài bản, thực tế và bền vững 🌱
        </p>

        <table width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;background-color:#020617;border:1px solid #1e293b;border-radius:6px;">
          <tr>
            <td style="padding:16px;color:#cbd5f5;font-size:14px;">
              ✔ Lộ trình học rõ ràng, dễ theo  
              <br>✔ Bài tập thực tế sát công việc  
              <br>✔ Mentor đồng hành & hỗ trợ
            </td>
          </tr>
        </table>

        <!-- Button -->
        <table cellpadding="0" cellspacing="0" align="center" style="margin:24px auto;">
          <tr>
            <td align="center" style="background-color:#38bdf8;border-radius:6px;">
              <a href="#" 
                 style="display:inline-block;padding:12px 24px;color:#020617;
                 text-decoration:none;font-weight:bold;font-size:14px;">
                Bắt đầu học ngay
              </a>
            </td>
          </tr>
        </table>

        <p style="margin:24px 0 0;color:#94a3b8;font-size:13px;">
          Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại phản hồi lại email này nhé.
        </p>

        <p style="margin:12px 0 0;">
          Chúc bạn học tập hiệu quả 💙  
          <br><strong>Đội ngũ CodeFarm</strong>
        </p>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td align="center" style="background-color:#020617;padding:16px;color:#64748b;font-size:12px;">
        © 2026 CodeFarm. All rights reserved.
      </td>
    </tr>

  </table>
</td>
  </tr>
</table>`;
};

export const getTemplateForgotPassword = (token) => {
    return `<table width="100%" cellpadding="0" cellspacing="0" style="margin:0;padding:0;background-color:#0f172a;font-family:Arial,Helvetica,sans-serif;">
  <tr>
    <td align="center" style="padding:30px 10px;">
      <!-- Container -->
      <table width="600" cellpadding="0" cellspacing="0" style="background-color:#020617;border-radius:8px;overflow:hidden;">
    <tr>
      <td align="center" style="background-color:#020617;padding:24px;">
        <h1 style="margin:0;color:#38bdf8;font-size:26px;line-height:1.3;">
          Welcome to CodeFarm 🚀
        </h1>
        <p style="margin:8px 0 0;color:#94a3b8;font-size:14px;">
          Grow your coding skills with us
        </p>
      </td>
    </tr>

    <!-- Body -->
    <tr>
      <td style="padding:24px;color:#e5e7eb;font-size:15px;line-height:1.6;">
        <p style="margin:0 0 16px;">
          Xin chào <strong>bạn</strong>,
        </p>

        <p style="margin:0 0 16px;">
          Chúng tôi rất vui khi bạn chính thức trở thành một thành viên của 
          <strong style="color:#38bdf8;">CodeFarm</strong>.
          Đây là nơi bạn học code một cách bài bản, thực tế và bền vững 🌱
        </p>

        <table width="100%" cellpadding="0" cellspacing="0" style="margin:20px 0;background-color:#020617;border:1px solid #1e293b;border-radius:6px;">
          <tr>
            <td style="padding:16px;color:#cbd5f5;font-size:14px;">
              ✔ Lộ trình học rõ ràng, dễ theo  
              <br>✔ Bài tập thực tế sát công việc  
              <br>✔ Mentor đồng hành & hỗ trợ
            </td>
          </tr>
        </table>

        <!-- Button -->
        <table cellpadding="0" cellspacing="0" align="center" style="margin:24px auto;">
          <tr>
            <td align="center" style="background-color:#38bdf8;border-radius:6px;">
              <a href="${token}" 
                 style="display:inline-block;padding:12px 24px;color:#020617;
                 text-decoration:none;font-weight:bold;font-size:14px;">
                Khoi phuc mat khau cua ban
              </a>
            </td>
          </tr>
        </table>

        <p style="margin:24px 0 0;color:#94a3b8;font-size:13px;">
          Nếu bạn có bất kỳ câu hỏi nào, đừng ngần ngại phản hồi lại email này nhé.
        </p>

        <p style="margin:12px 0 0;">
          Chúc bạn học tập hiệu quả 💙  
          <br><strong>Đội ngũ CodeFarm</strong>
        </p>
      </td>
    </tr>

    <!-- Footer -->
    <tr>
      <td align="center" style="background-color:#020617;padding:16px;color:#64748b;font-size:12px;">
        © 2026 CodeFarm. All rights reserved.
      </td>
    </tr>

  </table>
</td>
  </tr>
</table>`;
};
export const invitedTeacher = (link) => {
    return `
    <div style="font-family: Arial, sans-serif; background: #f4f6f8; padding: 24px;">
        <div style="max-width: 600px; margin: auto; background: #ffffff; border-radius: 8px; padding: 24px;">
            
            <h2 style="color: #2c3e50; text-align: center;">
                📩 Thư mời tạo tài khoản giáo viên
            </h2>

            <p>Xin chào,</p>

            <p>
                Bạn đã được <strong>Ban quản trị hệ thống</strong> mời tham gia vào 
                <strong>Hệ thống Quản lý Học sinh</strong> với vai trò:
            </p>

            <p style="font-size: 16px;">
                👉 <strong>Giáo viên</strong>
            </p>

            <p>
                Vui lòng nhấn vào nút bên dưới để hoàn tất việc tạo tài khoản.
            </p>

            <div style="text-align: center; margin: 32px 0;">
                <a href="${link}"
                   style="
                       background: #3498db;
                       color: #ffffff;
                       padding: 12px 24px;
                       text-decoration: none;
                       border-radius: 6px;
                       font-weight: bold;
                       display: inline-block;
                   ">
                    Hoàn tất đăng ký
                </a>
            </div>

            <p style="color: #555;">
                Sau khi hoàn tất, bạn sẽ cung cấp các thông tin sau:
            </p>

            <ul style="color: #555;">
                <li>ID giáo viên</li>
                <li>Họ và tên</li>
                <li>Địa chỉ</li>
                <li>Email</li>
                <li>Giới tính</li>
                <li>Môn giảng dạy</li>
                <li>Lớp đang phụ trách</li>
            </ul>

            <p style="color: #e74c3c;">
                ⏰ Lưu ý: Liên kết này chỉ có hiệu lực trong <strong>24 giờ</strong>.
            </p>

            <hr style="margin: 24px 0;" />

            <p style="font-size: 12px; color: #888;">
                Nếu bạn không mong đợi email này, vui lòng bỏ qua.
            </p>

            <p style="font-size: 12px; color: #888;">
                © 2026 Hệ thống Quản lý Học sinh
            </p>
        </div>
    </div>
    `;
};
