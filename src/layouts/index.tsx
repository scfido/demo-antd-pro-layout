import { Outlet } from 'umi';
import { PageContainer, ProLayout } from "@ant-design/pro-components";
import { Alert } from 'antd';

export default function Layout() {
  return (
    <div>
      <Alert message="站点通知"  banner/>
      <ProLayout>
        <PageContainer >
          <Outlet />
        </PageContainer>
      </ProLayout>
    </div>
  );
}
