// Code generated by protoc-gen-go-grpc. DO NOT EDIT.

package types

import (
	context "context"
	grpc "google.golang.org/grpc"
	codes "google.golang.org/grpc/codes"
	status "google.golang.org/grpc/status"
)

// This is a compile-time assertion to ensure that this generated file
// is compatible with the grpc package it is being compiled against.
const _ = grpc.SupportPackageIsVersion7

// ExecutorClient is the client API for Executor service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type ExecutorClient interface {
	Execute(ctx context.Context, in *ExecuteRequest, opts ...grpc.CallOption) (*ExecuteResponse, error)
}

type executorClient struct {
	cc grpc.ClientConnInterface
}

func NewExecutorClient(cc grpc.ClientConnInterface) ExecutorClient {
	return &executorClient{cc}
}

func (c *executorClient) Execute(ctx context.Context, in *ExecuteRequest, opts ...grpc.CallOption) (*ExecuteResponse, error) {
	out := new(ExecuteResponse)
	err := c.cc.Invoke(ctx, "/types.Executor/Execute", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// ExecutorServer is the server API for Executor service.
// All implementations must embed UnimplementedExecutorServer
// for forward compatibility
type ExecutorServer interface {
	Execute(context.Context, *ExecuteRequest) (*ExecuteResponse, error)
	mustEmbedUnimplementedExecutorServer()
}

// UnimplementedExecutorServer must be embedded to have forward compatible implementations.
type UnimplementedExecutorServer struct {
}

func (UnimplementedExecutorServer) Execute(context.Context, *ExecuteRequest) (*ExecuteResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Execute not implemented")
}
func (UnimplementedExecutorServer) mustEmbedUnimplementedExecutorServer() {}

// UnsafeExecutorServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to ExecutorServer will
// result in compilation errors.
type UnsafeExecutorServer interface {
	mustEmbedUnimplementedExecutorServer()
}

func RegisterExecutorServer(s grpc.ServiceRegistrar, srv ExecutorServer) {
	s.RegisterService(&_Executor_serviceDesc, srv)
}

func _Executor_Execute_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(ExecuteRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(ExecutorServer).Execute(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/types.Executor/Execute",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(ExecutorServer).Execute(ctx, req.(*ExecuteRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _Executor_serviceDesc = grpc.ServiceDesc{
	ServiceName: "types.Executor",
	HandlerType: (*ExecutorServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Execute",
			Handler:    _Executor_Execute_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "executor.proto",
}

// StatusHelperClient is the client API for StatusHelper service.
//
// For semantics around ctx use and closing/ending streaming RPCs, please refer to https://pkg.go.dev/google.golang.org/grpc/?tab=doc#ClientConn.NewStream.
type StatusHelperClient interface {
	Update(ctx context.Context, in *StatusUpdateRequest, opts ...grpc.CallOption) (*StatusUpdateResponse, error)
}

type statusHelperClient struct {
	cc grpc.ClientConnInterface
}

func NewStatusHelperClient(cc grpc.ClientConnInterface) StatusHelperClient {
	return &statusHelperClient{cc}
}

func (c *statusHelperClient) Update(ctx context.Context, in *StatusUpdateRequest, opts ...grpc.CallOption) (*StatusUpdateResponse, error) {
	out := new(StatusUpdateResponse)
	err := c.cc.Invoke(ctx, "/types.StatusHelper/Update", in, out, opts...)
	if err != nil {
		return nil, err
	}
	return out, nil
}

// StatusHelperServer is the server API for StatusHelper service.
// All implementations must embed UnimplementedStatusHelperServer
// for forward compatibility
type StatusHelperServer interface {
	Update(context.Context, *StatusUpdateRequest) (*StatusUpdateResponse, error)
	mustEmbedUnimplementedStatusHelperServer()
}

// UnimplementedStatusHelperServer must be embedded to have forward compatible implementations.
type UnimplementedStatusHelperServer struct {
}

func (UnimplementedStatusHelperServer) Update(context.Context, *StatusUpdateRequest) (*StatusUpdateResponse, error) {
	return nil, status.Errorf(codes.Unimplemented, "method Update not implemented")
}
func (UnimplementedStatusHelperServer) mustEmbedUnimplementedStatusHelperServer() {}

// UnsafeStatusHelperServer may be embedded to opt out of forward compatibility for this service.
// Use of this interface is not recommended, as added methods to StatusHelperServer will
// result in compilation errors.
type UnsafeStatusHelperServer interface {
	mustEmbedUnimplementedStatusHelperServer()
}

func RegisterStatusHelperServer(s grpc.ServiceRegistrar, srv StatusHelperServer) {
	s.RegisterService(&_StatusHelper_serviceDesc, srv)
}

func _StatusHelper_Update_Handler(srv interface{}, ctx context.Context, dec func(interface{}) error, interceptor grpc.UnaryServerInterceptor) (interface{}, error) {
	in := new(StatusUpdateRequest)
	if err := dec(in); err != nil {
		return nil, err
	}
	if interceptor == nil {
		return srv.(StatusHelperServer).Update(ctx, in)
	}
	info := &grpc.UnaryServerInfo{
		Server:     srv,
		FullMethod: "/types.StatusHelper/Update",
	}
	handler := func(ctx context.Context, req interface{}) (interface{}, error) {
		return srv.(StatusHelperServer).Update(ctx, req.(*StatusUpdateRequest))
	}
	return interceptor(ctx, in, info, handler)
}

var _StatusHelper_serviceDesc = grpc.ServiceDesc{
	ServiceName: "types.StatusHelper",
	HandlerType: (*StatusHelperServer)(nil),
	Methods: []grpc.MethodDesc{
		{
			MethodName: "Update",
			Handler:    _StatusHelper_Update_Handler,
		},
	},
	Streams:  []grpc.StreamDesc{},
	Metadata: "executor.proto",
}