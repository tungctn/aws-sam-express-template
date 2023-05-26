# Mô tả tổng quan

Đây là một template sử dụng AWS SAM để triển khai một ứng dụng web serverless, kết hợp với framework backend ExpressJS và cơ sở dữ liệu MongoDB. Template đã được cấu hình sẵn cho service API Gateway và Lambda function, sử dụng dịch vụ CloudFormation của AWS.

# Các công nghệ được sử dụng


AWS SAM: AWS Serverless Application Model là một khung đơn giản để triển khai ứng dụng serverless trên AWS Lambda và API Gateway.

ExpressJS: Framework backend phổ biến cho Node.js, cho phép bạn xây dựng các API RESTful một cách dễ dàng.

MongoDB: Cơ sở dữ liệu NoSQL phổ biến, cho phép bạn lưu trữ dữ liệu một cách linh hoạt và mở rộng.

# Hướng dẫn sử dụng

Để sử dụng template này, bạn cần cài đặt AWS CLI và AWS SAM CLI trên máy tính của mình.

Sử dụng lệnh sau để cấu hình AWS CLI: 

```
aws configure
```


Sử dụng lệnh sau để triển khai ứng dụng của bạn trên AWS:

```
sam build
```

```
sam deploy --guided
```

Lệnh `sam build` sẽ tạo ra các tệp cần thiết để triển khai ứng dụng của bạn, trong khi lệnh `sam deploy` sẽ triển khai ứng dụng của bạn trên AWS.

Sau khi triển khai ứng dụng của bạn, bạn có thể truy cập API Gateway được tạo ra và sử dụng các endpoint để thao tác với dữ liệu.
