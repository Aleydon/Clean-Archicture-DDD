import { faker } from '@faker-js/faker';

import { UserEntity, UserProps } from '@/users/domain/entities/user.entity';

describe('UserEntity', () => {
	let props: UserProps;
	let sut: UserEntity;

	beforeEach(() => {
		props = {
			name: faker.person.fullName(),
			email: faker.internet.email(),
			password: faker.internet.password(),
		};

		sut = new UserEntity(props);
	});

	it('should be defined and have the correct props', () => {
		expect(sut).toBeDefined();
		expect(sut).toBeInstanceOf(UserEntity);
		expect(
			Object.entries(props).map(([key, value]) => {
				expect(sut.props[key]).toEqual(value);
			}),
		);
		expect(sut.props.createdAt).toBeInstanceOf(Date);
	});

	it('getter of name field', () => {
		expect(sut.props.name).toBeDefined();
		expect(sut.name).toBe(props.name);
		expect(typeof sut.name).toBe('string');
	});

	it('getter of email field', () => {
		expect(sut.props.email).toBeDefined();
		expect(sut.email).toBe(props.email);
		expect(typeof sut.email).toBe('string');
	});

	it('getter of password field', () => {
		expect(sut.props.password).toBeDefined();
		expect(sut.password).toBe(props.password);
		expect(typeof sut.password).toBe('string');
	});

	it('getter of createdAt field', () => {
		expect(sut.props.createdAt).toBeDefined();
		expect(sut.createdAt).toBeInstanceOf(Date);
	});
});
