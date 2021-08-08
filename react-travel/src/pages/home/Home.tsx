import React from 'react'

import { Header, Footer, SideMenu, Carousel, ProductCollection } from '@/components'
import { Col, Layout, Row, Typography } from 'antd'
import { productList1, productList2, productList3 } from "@/mockups"

import sideImage from '@/assets/images/sider_2019_12-09.png'
import sideImage2 from '@/assets/images/sider_2019_02-04.png'
import sideImage3 from '@/assets/images/sider_2019_02-04-2.png'

import style from './style.module.less';
import { useTranslation } from 'react-i18next'

interface Props {

}

export const Home = (props: Props) => {
  const { t } = useTranslation()
  return (
    <Layout >
      <Header />
      <Layout.Content className={style['page-content']}>
        {/* <h2>Content</h2> */}
        <Row>
          <Col span={6}>
            <SideMenu />
          </Col>
          <Col span={18}>
            <Carousel />
          </Col>
        </Row>
        <ProductCollection
          title={
            <Typography.Title level={3} type="warning">
              {/* 爆款推荐 */}
              {t('home_page.hot_recommended')}
            </Typography.Title>
          }
          sideImage={sideImage}
          products={productList1}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="danger">
              {/* 新品上市 */}
              {t('home_page.new_arrival')}
            </Typography.Title>
          }
          sideImage={sideImage2}
          products={productList2}
        />
        <ProductCollection
          title={
            <Typography.Title level={3} type="success">
              {/* 国内游推荐 */}
              {t('home_page.domestic_travel')}
            </Typography.Title>
          }
          sideImage={sideImage3}
          products={productList3}
        />
      </Layout.Content>
      <Footer />
    </Layout>
  )
}
