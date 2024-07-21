import React from 'react';
import Image from 'next/image';

import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Button } from '@/components/ui/button';

import { dummyData } from './dummyData';

export default function RootPage() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="text-right">
        <Button variant="custom">アイテム追加</Button>
      </div>
      <div className="flex justify-center">
        <Table className="border">
          <TableHeader>
            <TableRow>
              <TableHead className="w-2/5">タイトル</TableHead>
              <TableHead>担当者</TableHead>
              <TableHead>ステータス</TableHead>
              <TableHead>期限</TableHead>
              <TableHead>アクション</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {dummyData.map((item) => (
              <TableRow key={item.id}>
                <TableCell className="w-2/5">{item.title}</TableCell>
                <TableCell>{item.person}</TableCell>
                <TableCell>{item.status}</TableCell>
                <TableCell>{item.dueDate}</TableCell>
                <TableCell className="flex">
                  <Image
                    width={30}
                    height={30}
                    className="mr-4 mt-2 cursor-pointer"
                    src="/image/pencil.svg"
                    alt="pencil"
                  />
                  <Image width={20} height={20} className="cursor-pointer" src="/image/trash.svg" alt="trash" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </section>
  );
}
