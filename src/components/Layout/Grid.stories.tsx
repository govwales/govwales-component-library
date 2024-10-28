import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

// Import React component.
import { Container, Row, Col } from './Grid';

// Storybook Meta.
const meta: Meta<typeof Container> = {
  title: 'Layout/Grid',
  component: Container,
  parameters: {
    docs: {
      source: {
        transform: code => {
          code = code.substring(1);
          code = code.replace('render: () => ', '');
          code = code.slice(0, -1);
          return code;
        },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Container>;

export const DefaultContainer: Story = {
  render: () => (
    <Container id='gw-container'>
      <Row>
        <Col>
          <div className='box'>960px wide centered container.</div>
        </Col>
      </Row>
    </Container>
  ),
};

export const FluidContainer: Story = {
  render: () => (
    <Container id='gw-fluid-container' fluid={true}>
      <Row>
        <Col xs='12'>
          <div className='box'>
            100% wide container with 20px padding left and right.
          </div>
        </Col>
      </Row>
    </Container>
  ),
};

export const RowWithCenteredColumns: Story = {
  render: () => (
    <Container>
      <Row id='gw-row' modifierClass='center'>
        <Col xs='12' sm='6' md='3'>
          <div className='box'>1</div>
        </Col>
        <Col xs='12' sm='6' md='3'>
          <div className='box'>2</div>
        </Col>
      </Row>
    </Container>
  ),
};

export const RowWithReversedColumns: Story = {
  render: () => (
    <Container>
      <Row id='gw-row' modifierClass='reversed'>
        <Col xs='3'>
          <div className='box'>1</div>
        </Col>
        <Col xs='3'>
          <div className='box'>2</div>
        </Col>
        <Col xs='3'>
          <div className='box'>3</div>
        </Col>
        <Col xs='3'>
          <div className='box'>4</div>
        </Col>
      </Row>
    </Container>
  ),
};

export const ColumnBreakpoints: Story = {
  render: () => (
    <Container>
      <Row id='gw-row'>
        <Col xs='12' sm='6' md='3' lg='1'>
          <div className='box'>1</div>
        </Col>
        <Col xs='12' sm='6' md='3' lg='1'>
          <div className='box'>2</div>
        </Col>
        <Col xs='12' sm='6' md='3' lg='1'>
          <div className='box'>3</div>
        </Col>
        <Col xs='12' sm='6' md='3' lg='1'>
          <div className='box'>4</div>
        </Col>
        <Col xs='12' sm='6' md='3' lg='1'>
          <div className='box'>5</div>
        </Col>
        <Col xs='12' sm='6' md='3' lg='1'>
          <div className='box'>6</div>
        </Col>
        <Col xs='12' sm='6' md='3' lg='1'>
          <div className='box'>7</div>
        </Col>
        <Col xs='12' sm='6' md='3' lg='1'>
          <div className='box'>8</div>
        </Col>
        <Col xs='12' sm='6' md='3' lg='1'>
          <div className='box'>9</div>
        </Col>
        <Col xs='12' sm='6' md='3' lg='1'>
          <div className='box'>10</div>
        </Col>
        <Col xs='12' sm='6' md='3' lg='1'>
          <div className='box'>11</div>
        </Col>
        <Col xs='12' sm='6' md='3' lg='1'>
          <div className='box'>12</div>
        </Col>
      </Row>
      <Row>
        <Col xs sm md lg>
          <div className='box'>13</div>
        </Col>
        <Col xs='2' sm='4' md='6' lg='8'>
          <div className='box'>14</div>
        </Col>
        <Col xs sm md lg>
          <div className='box'>15</div>
        </Col>
      </Row>
      <Row>
        <Col xs='4' sm='4' md='4' lg='2'>
          <div className='box'>16</div>
        </Col>
        <Col xs sm md lg>
          <div className='box'>17</div>
        </Col>
        <Col xs='4' sm='4' md='4' lg='2'>
          <div className='box'>18</div>
        </Col>
      </Row>
    </Container>
  ),
};

export const ColumnsWithPushAndPullModifiers: Story = {
  render: () => (
    <Container>
      <Row>
        <Col
          sm={{ size: 8, pull: 4 }}
          md={{ size: 6, pull: 6 }}
          lg={{ size: 2, pull: 10 }}
        >
          <div className='box'>1</div>
        </Col>
        <Col
          sm={{ size: 9, pull: 3 }}
          md={{ size: 7, pull: 5 }}
          lg={{ size: 3, pull: 9 }}
        >
          <div className='box'>2</div>
        </Col>
        <Col
          sm={{ size: 10, pull: 2 }}
          md={{ size: 8, pull: 4 }}
          lg={{ size: 4, pull: 8 }}
        >
          <div className='box'>3</div>
        </Col>
      </Row>
      <Row>
        <Col
          sm={{ size: 8, push: 4 }}
          md={{ size: 6, push: 6 }}
          lg={{ size: 2, push: 10 }}
        >
          <div className='box'>1</div>
        </Col>
        <Col
          sm={{ size: 9, push: 3 }}
          md={{ size: 7, push: 5 }}
          lg={{ size: 3, push: 9 }}
        >
          <div className='box'>2</div>
        </Col>
        <Col
          sm={{ size: 10, push: 2 }}
          md={{ size: 8, push: 4 }}
          lg={{ size: 4, push: 8 }}
        >
          <div className='box'>3</div>
        </Col>
      </Row>
    </Container>
  ),
};

export const ColumnsWithFirstOrLastModifiers: Story = {
  render: () => (
    <Container>
      <Row>
        <Col xs={{ size: 4, last: true }}>
          <div className='box'>1</div>
        </Col>
        <Col xs='4'>
          <div className='box'>2</div>
        </Col>
        <Col xs='4'>
          <div className='box'>3</div>
        </Col>
        <Col xs='4'>
          <div className='box'>4</div>
        </Col>
        <Col xs={{ size: 4, first: true }}>
          <div className='box'>5</div>
        </Col>
        <Col xs='4'>
          <div className='box'>6</div>
        </Col>
      </Row>
    </Container>
  ),
};

export const ColumnsWithDisplayModifiers: Story = {
  render: () => (
    <Container>
      <Row>
        <Col xs={{ displayNone: true }} md='6' lg='6'>
          <div className='box'>1</div>
        </Col>
        <Col xs='12' md='6' lg={{ displayNone: true }}>
          <div className='box'>2</div>
        </Col>
        <Col xs='12' md={{ displayNone: true }} lg='6'>
          <div className='box'>3</div>
        </Col>
      </Row>
      <Row>
        <Col xs='12' md='6' lg='4'>
          <div className='box'>4</div>
        </Col>
        <Col xs='12' md={{ displayNone: true }} lg='4'>
          <div className='box'>5</div>
        </Col>
        <Col xs='12' md='6' lg='4'>
          <div className='box'>6</div>
        </Col>
      </Row>
    </Container>
  ),
};

export const ColumnsWithClassModifiers: Story = {
  render: () => (
    <Container>
      <Row>
        <Col modifierClass='gw--example-modifier-class'>
          <div className='box'>1</div>
        </Col>
        <Col modifierClass='gw-fully-hidden'>
          <div className='box'>2</div>
        </Col>
        <Col modifierClass='gw-visually-hidden'>
          <div className='box'>3</div>
        </Col>
      </Row>
    </Container>
  ),
};
