# Project - Delish Food

Thành viên:
* [x] 1312636 - Nguyễn Hoàng Quốc Trung - nhqtrung95 - 80%
* [x] 1312088 - Trần Đình Duy - tranduy95 - duytrandinh95@gmail.com - Tỉ lệ đóng góp cho đề tài
* [x] 1312064  - Phan Nguyên Mạnh Cường - 1312064  - phancuong12a5@gmail.com - Tỉ lệ đóng góp cho đề tài
* [ ] **MSSV4** - Tên sinh viên 4 - tên tài khoản github - email - Tỉ lệ đóng góp cho đề tài

URL: https://udpt-project-qttd.herokuapp.com/home
Báo cáo: **URL Github Page của đề tài**

## Yêu cầu

Trong đề tài, sinh viên cần mô tả các chức năng có thể thực hiện bên dưới. Sinh viên check vào các mục bên dưới và ghi mã sinh viên đã làm vào chức năng theo mẫu. Mục nào ko có MSSV là tính điểm theo nhóm. Cần sắp xếp các chức năng bên dưới theo thứ tự MSSV đã thực hiện.

Làm việc nhóm:
* [x] Có sử dụng GIT.
* [ ] Sử dụng GIT theo Centralized Workflow.
* [ ] Sử dụng GIT theo Feature Branch Workflow.
* [ ] Sử dụng GIT theo Gitflow Workflow.

## Mô tả nghiệp vụ chung ứng dụng
Phần mô tả đặt vào đây

## Lập trình server
### MVC
* [x] MVC (1312636)
* [x] Config (1312636)
* [ ] REST routing (MSSV1)
* [ ] Layout & partial (MSSV1)

### Lập trình dữ liệu
* [x] Thêm (1312636)
* [x] Xóa (1312636)
* [x] Sửa (1312636)
* [x] Tìm kiếm (1312636)

### Xử lý lỗi
* [ ] Xử lý lỗi trong cùng trang web (MSSV1)
* [x] Xử lý lỗi dùng trang web riêng (1312636)
   * [ ] 401 (MSSV1)
   * [x] 403 (1312636)
   * [x] 404 (1312636)
   * [x] 500 (1312636)

### Tương tác API khác
Liệt kê các API nhóm đã sử dụng được ở đây
* [x] Facebook API: Đăng nhập (1312636)
* [ ] Google API: mô tả (MSSV1)
* [ ] ...

## Lập trình client
* [x] Kiểm tra dữ liệu (1312064)
* [ ] Animation (MSSV1)
* [x] Thao tác DOM (1312636)
* [x] AJAX (1312636)

## Bảo mật
* [x] Chứng thực (1312636)
* [x] Phân quyền sử dụng một số trang web với nhiều vai trò khác nhau (MSSV1)
   * [x] Không cho phép thao tác vào trang web khi không có quyền (MSSV1)
   * [ ] Thể hiện các chức năng khác nhau trên cùng giao diện khi người dùng có quyền khác nhau (MSSV1)
   * [ ] Thể hiện lỗi khi không truy xuất được trang khi không có quyền (MSSV1)

## Nâng cao
* [x] Thêm và kiểm tra CSRF Token khi submit form sử dụng method post(1312636)

## Chức năng đã thực hiện
### Khởi tạo
* [x] Khởi tạo project và phân chia các module theo mô hình MVC (1312636)
* [x] Thiết kế và khởi tạo database (1312636)
* [x] Tìm kiếm và chỉnh sửa template html từ thư viện w3layouts (1312636)
* [x] Config chứa các thiết lập về database, folder upload hình ảnh, routes, và thiết lập xác thực người dùng (1312636)

### Lập trình dữ liệu
* [x] Thêm, xóa, sửa loại sản phẩm + sản phẩm trong phầnq quản lý admin (1312636)
* [x] Tìm kiếm sản phẩm theo danh mục hoặc tất cả sản phẩm trong trang chủ /home (1312636)
* [x] Lưu thông tin đơn hàng sau khi người dùng đặt hàng

### Xử lý lỗi
* [x] Xử lý lỗi 
  * [x] 404 khi trang không được tìm thấy (1312636)
  * [x] 403 khi thiếu csrf token khi submit form method post (1312636)
  * [x] 500 lỗi server (1312636)

### Tương tác API
* [x] Facebook API: đăng nhập (1312636)
* [x] Google API: đăng nhập (1312064)

### Lập trình client
* [x] Kiểm tra dữ liệu nhập vào khi đăng ký tài khoản (1312064)
* [x] Thao tác DOM
  * [x] DOM lấy ra dữ liệu nhập vào form đăng ký để kiểm tra (1312064)
  * [x] DOM hiển thị số sản phẩm bên cạnh giỏ hàng (1312636)
* [x] AJAX
  * [x] AJAX gởi request lên server khi người dùng thêm sản phẩm vào giỏ hàng
  * [x] AJAX gởi request lên server khi người dùng thêm, giảm, bỏ sản phẩm ra khỏi giỏ hàng
### Bảo Mật
* [x] Xác thực người dùng, cho phép đăng nhập và đăng ký người dùng (1312636)
* [x] Phân Quyền người dùng
  * [x] Người dùng chưa đăng nhập khi vào trang home sẽ tự động redirect về lại trang login (1312636)
  * [x] Người dùng không có quyền admin khi truy cập vào những routes quản lý của admin sẽ được chuyền về trang home (132636)

## Tài khoản sử dụng với quyền admin
  Username: nhqtrung95@gmail.com
  Password: tyevtcbye
  URL admin: https://udpt-project-qttd.herokuapp.com/admin/tintuc/danhsach
## Demo

Link ảnh GIF demo ứng dụng:

![Video Walkthrough](demo.gif)

Tạo ảnh GIF với chương trình [LiceCap](http://www.cockos.com/licecap/).


## License

    Copyright [yyyy] [name of copyright owner]

    Licensed under the Apache License, Version 2.0 (the "License");
    you may not use this file except in compliance with the License.
    You may obtain a copy of the License at

        http://www.apache.org/licenses/LICENSE-2.0

    Unless required by applicable law or agreed to in writing, software
    distributed under the License is distributed on an "AS IS" BASIS,
    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
    See the License for the specific language governing permissions and
    limitations under the License.
