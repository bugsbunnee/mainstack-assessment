import React from 'react';
import _ from 'lodash';

import { Page, Text, View, Document, StyleSheet,  usePDF } from '@react-pdf/renderer';
import { Button, useToast } from '@chakra-ui/react';
import { BsDownload } from 'react-icons/bs';

import { Transaction } from '../models/Transaction';
import { formatAmount, formatDate } from '../utils/utils';

interface ExportListData {
  data: Transaction[];
}

const ExportList: React.FC<ExportListData> = ({ data }) => {
    return (
        <Document>
          <Page size="A4" style={styles.page}>
              {data.map((item, index) => (
                <React.Fragment key={index}>
                  <View  style={styles.section}>
                    <View style={styles.item}>
                        <Text style={styles.title}>Amount:</Text>
                        <Text style={styles.text}>{formatAmount(item.amount)}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.title}>Date:</Text>
                        <Text style={styles.text}>{formatDate(item.date)}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.title}>Status:</Text>
                        <Text style={styles.text}>{item.status}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.title}>Type:</Text>
                        <Text style={styles.text}>{item.type}</Text>
                    </View>
                    <View style={styles.item}>
                        <Text style={styles.title}>Name:</Text>
                        <Text style={styles.text}>{_.get(item, 'metadata.name')}</Text>
                    </View>
                  </View>

                  <View style={styles.separator} />
                </ React.Fragment>
              ))}
          </Page>
        </Document>
    );
};

const ExportButton: React.FC<ExportListData> = ({ data }) => {
    const [instance] = usePDF({ document: <ExportList data={data} /> });
    const toast = useToast();

    return (
        <Button
            isLoading={instance.loading}
            fontWeight={600}
            fontSize='1rem'
            lineHeight='1.5rem'
            color='black.300' 
            bg='gray.50' 
            rounded={100} 
            href={instance.url as string}
            download='transactions.pdf'
            as='a'
            rightIcon={<BsDownload size={10} />}
            onError={() => toast({
              title: 'An error occurred!',
              status: 'error',
              isClosable: true,
            })}
          >
             Export list
        </Button>
    )
}

const styles = StyleSheet.create({
    page: {
      padding: 10
    },
    section: {
      padding: 5,
      flexGrow: 1,
    },
    item: {
      flexDirection: 'row',
      alignItems: 'center',
      padding: 10,
      borderBottomWidth: 1,
      borderBottomColor: '#f9f9f9'
    },
    text: {
      fontSize: 14,
      color: '#131316',
      fontWeight: 500
    },
    title: {
      fontSize: 14,
      color: '#131316',
      fontWeight: 700,
      marginRight: 10,
    },
    separator: {
      width: '100%',
      height: 1,
      backgroundColor: '#56616B',
      marginVertical: 5,
    }
});

export default ExportButton;