import type { NextPage } from 'next'

import PageContainer from 'components/common/page-container'

import Section1 from 'components/home/section1'

const HomePage: NextPage = () => {
    return (
        <PageContainer>
            <Section1 />
        </PageContainer>
    )
}

export default HomePage